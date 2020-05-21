<?php

namespace App\Maker;

use Doctrine\Bundle\DoctrineBundle\DoctrineBundle;
use Doctrine\Common\Inflector\Inflector;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\MakerBundle\ConsoleStyle;
use Symfony\Bundle\MakerBundle\DependencyBuilder;
use Symfony\Bundle\MakerBundle\Doctrine\DoctrineHelper;
use Symfony\Bundle\MakerBundle\Generator;
use Symfony\Bundle\MakerBundle\InputConfiguration;
use Symfony\Bundle\MakerBundle\Maker\AbstractMaker;
use Symfony\Bundle\MakerBundle\Str;
use Symfony\Bundle\MakerBundle\Util\ClassNameDetails;
use Symfony\Bundle\MakerBundle\Validator;
use Symfony\Bundle\TwigBundle\TwigBundle;
use Symfony\Component\Config\Resource\DirectoryResource;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Question\Question;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Csrf\CsrfTokenManager;
use Symfony\Component\Validator\Validation;

/**
 * @author Rudak Arnold
 */
final class MakeBs4Crud extends AbstractMaker
{
    private $doctrineHelper;

    public function __construct(DoctrineHelper $doctrineHelper)
    {
        $this->doctrineHelper = $doctrineHelper;
    }

    public static function getCommandName(): string
    {
        return 'make:bs4crud';
    }

    /**
     * {@inheritdoc}
     */
    public function configureCommand(Command $command, InputConfiguration $inputConfig)
    {
        $command
            ->setDescription('Creates Bootstrap 4 CRUD for Doctrine entity class')
            ->addArgument('entity-class', InputArgument::OPTIONAL, sprintf('The class name of the entity to create CRUD (e.g. <fg=yellow>%s</>)', Str::asClassName(Str::getRandomTerm())))
            ->addOption('overwrite', 'o', InputOption::VALUE_NONE, 'Écrasera tous les fichiers.')
            ->setHelp(file_get_contents(__DIR__ . '/../Resources/help/MakeBs4Crud.txt'))
        ;

        $inputConfig->setArgumentAsNonInteractive('entity-class');
    }

    public function interact(InputInterface $input, ConsoleStyle $io, Command $command)
    {
        if (null === $input->getArgument('entity-class')) {
            $argument = $command->getDefinition()->getArgument('entity-class');

            $entities = $this->doctrineHelper->getEntitiesForAutocomplete();

            $question = new Question($argument->getDescription());
            $question->setAutocompleterValues($entities);

            $value = $io->askQuestion($question);

            $input->setArgument('entity-class', $value);
        }
    }

    public function generate(InputInterface $input, ConsoleStyle $io, Generator $generator)
    {
        $overwrite = $input->getOption('overwrite');

        $entityClassDetails = $generator->createClassNameDetails(
            Validator::entityExists($input->getArgument('entity-class'), $this->doctrineHelper->getEntitiesForAutocomplete()),
            'Entity\\'
        );

        $entityDoctrineDetails = $this->doctrineHelper->createDoctrineDetails($entityClassDetails->getFullName());

        $repositoryVars = [];

        if (null !== $entityDoctrineDetails->getRepositoryClass()) {
            $repositoryClassDetails = $generator->createClassNameDetails(
                '\\' . $entityDoctrineDetails->getRepositoryClass(),
                'Repository\\',
                'Repository'
            );

            $repositoryVars = [
                'repository_full_class_name' => $repositoryClassDetails->getFullName(),
                'repository_class_name'      => $repositoryClassDetails->getShortName(),
                'repository_var'             => lcfirst(Inflector::singularize($repositoryClassDetails->getShortName())),
            ];
        }

        $controllerClassDetails = $generator->createClassNameDetails(
            $entityClassDetails->getRelativeNameWithoutSuffix() . 'Controller',
            'Controller\\',
            'Controller'
        );

        // Form

        if ($overwrite) {
            $this->removeOldFormType($entityClassDetails, $io);
        }

        $formClassDetails = $overwrite
            ? $generator->createClassNameDetails(
                $entityClassDetails->getRelativeNameWithoutSuffix() . 'Type',
                'Form\\',
                'Type'
            )
            : $this->getFormClassDetails($generator, $entityClassDetails);

        $entityVarPlural   = lcfirst(Inflector::pluralize($entityClassDetails->getShortName()));
        $entityVarSingular = lcfirst(Inflector::singularize($entityClassDetails->getShortName()));

        $entityTwigVarPlural   = Str::asTwigVariable($entityVarPlural);
        $entityTwigVarSingular = Str::asTwigVariable($entityVarSingular);

        $routeName     = Str::asRouteName($controllerClassDetails->getRelativeNameWithoutSuffix());
        $templatesPath = Str::asFilePath($controllerClassDetails->getRelativeNameWithoutSuffix());

        // Controller

        if ($overwrite) {
            $this->removeOldController($entityClassDetails, $io);
        }

        $generator->generateController(
            $controllerClassDetails->getFullName(),
            $this->getOwnControllerTemplatePath('crud/controller/Controller.tpl.php'),
            array_merge([
                'entity_full_class_name'   => $entityClassDetails->getFullName(),
                'entity_class_name'        => $entityClassDetails->getShortName(),
                'form_full_class_name'     => $formClassDetails->getFullName(),
                'form_class_name'          => $formClassDetails->getShortName(),
                'route_path'               => Str::asRoutePath($controllerClassDetails->getRelativeNameWithoutSuffix()),
                'route_name'               => $routeName,
                'templates_path'           => $templatesPath,
                'entity_var_plural'        => $entityVarPlural,
                'entity_twig_var_plural'   => $entityTwigVarPlural,
                'entity_var_singular'      => $entityVarSingular,
                'entity_twig_var_singular' => $entityTwigVarSingular,
                'entity_identifier'        => $entityDoctrineDetails->getIdentifier(),
            ],
                $repositoryVars
            )
        );

        $generator->generateClass(
            $formClassDetails->getFullName(),
            dirname(__DIR__) . '/Resources/skeleton/form/Type.tpl.php',
            [
                'bounded_full_class_name' => $entityClassDetails->getFullName(),
                'bounded_class_name'      => $entityClassDetails->getShortName(),
                'form_fields'             => $entityDoctrineDetails->getFormFields(),
            ]
        );

        $templates = [
            '_delete_form' => [
                'route_name'               => $routeName,
                'entity_twig_var_singular' => $entityTwigVarSingular,
                'entity_identifier'        => $entityDoctrineDetails->getIdentifier(),
            ],
            '_form'        => [],
            'edit'         => [
                'entity_class_name'        => $entityClassDetails->getShortName(),
                'entity_twig_var_singular' => $entityTwigVarSingular,
                'entity_identifier'        => $entityDoctrineDetails->getIdentifier(),
                'route_name'               => $routeName,
            ],
            'index'        => [
                'entity_class_name'        => $entityClassDetails->getShortName(),
                'entity_twig_var_plural'   => $entityTwigVarPlural,
                'entity_twig_var_singular' => $entityTwigVarSingular,
                'entity_identifier'        => $entityDoctrineDetails->getIdentifier(),
                'entity_fields'            => array_slice($entityDoctrineDetails->getDisplayFields(), 1),
                'route_name'               => $routeName,
            ],
            'new'          => [
                'entity_class_name' => $entityClassDetails->getShortName(),
                'route_name'        => $routeName,
            ],
            'show'         => [
                'entity_class_name'        => $entityClassDetails->getShortName(),
                'entity_twig_var_singular' => $entityTwigVarSingular,
                'entity_identifier'        => $entityDoctrineDetails->getIdentifier(),
                'entity_fields'            => array_slice($entityDoctrineDetails->getDisplayFields(), 1),
                'route_name'               => $routeName,
            ],
        ];

        foreach ($templates as $template => $variables) {
            $filepath = 'templates/' . $templatesPath . '/' . $template . '.html.twig';

            if ($overwrite) {
                $this->deleteOldView($filepath, $io);
            }

            $generator->generateFile(
                $filepath,
                $this->getOwnTemplatePath($template),
                $variables
            );
        }

        $generator->writeChanges();

        $this->writeSuccessMessage($io);

        $io->text(sprintf('Next: Check your new CRUD by going to <fg=yellow>%s/</>', Str::asRoutePath($controllerClassDetails->getRelativeNameWithoutSuffix())));
    }

    /**
     * {@inheritdoc}
     */
    public function configureDependencies(DependencyBuilder $dependencies)
    {
        $dependencies->addClassDependency(
            Route::class,
            'router'
        );

        $dependencies->addClassDependency(
            AbstractType::class,
            'form'
        );

        $dependencies->addClassDependency(
            Validation::class,
            'validator'
        );

        $dependencies->addClassDependency(
            TwigBundle::class,
            'twig-bundle'
        );

        $dependencies->addClassDependency(
            DoctrineBundle::class,
            'orm-pack'
        );

        $dependencies->addClassDependency(
            CsrfTokenManager::class,
            'security-csrf'
        );

        $dependencies->addClassDependency(
            ParamConverter::class,
            'annotations'
        );
    }

    private function getOwnControllerTemplatePath($templatePath)
    {
        $ownPath = dirname(__DIR__) . '/Resources/skeleton/' . $templatePath;
        return file_exists($ownPath)
            ? $ownPath
            : $templatePath;
    }

    private function getOwnTemplatePath($template)
    {
        $templatePath = dirname(__DIR__) . '/Resources/skeleton/' . 'crud/templates/' . $template . '.tpl.php';
        return file_exists($templatePath)
            ? $templatePath
            : 'crud/templates/' . $template . '.tpl.php';
    }

    private function removeOldController(ClassNameDetails $entityClassDetails, ConsoleStyle $io)
    {
        $controllerPath = sprintf('%s/Controller/%sController.php',
            dirname(__DIR__),
            $entityClassDetails->getRelativeNameWithoutSuffix()
        );

        $this->deleteFile($io, $controllerPath, $entityClassDetails->getRelativeNameWithoutSuffix() . 'Controller.php');
    }

    private function deleteOldView(string $filepath, ConsoleStyle $io)
    {
        $viewAbsolutePath = dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . $filepath;
        $this->deleteFile($io, $viewAbsolutePath, $filepath);
    }

    private function removeOldFormType(ClassNameDetails $entityClassDetails, ConsoleStyle $io)
    {
        $formAbsolutePath = sprintf('%s/Form/%s', dirname(__DIR__), $entityClassDetails->getRelativeNameWithoutSuffix() . 'Type.php');
        $this->deleteFile($io, $formAbsolutePath, $entityClassDetails->getRelativeNameWithoutSuffix() . 'Type.php');
    }

    private function deleteFile(ConsoleStyle $io, $absolutepath, $filename)
    {
        $absolutepath = str_replace('\\', '/', $absolutepath);

        if (!file_exists($absolutepath)) {
            $io->comment(sprintf(
                '<fg=yellow>%s</>: %s',
                "Don't exist",
                $filename
            ));
            return;
        }
        if (!unlink($absolutepath)) {
            throw new \Exception(sprintf("Can't delete '%s'", $filename));
        }
        $io->comment(sprintf(
            '<fg=red>%s</>: %s',
            'Deleted',
            $filename
        ));
    }

    private function getFormClassDetails(Generator $generator, ClassNameDetails $entityClassDetails)
    {
        $iter = 0;
        do {
            $formClassDetails = $generator->createClassNameDetails(
                $entityClassDetails->getRelativeNameWithoutSuffix() . ($iter ?: '') . 'Type',
                'Form\\',
                'Type'
            );
            ++$iter;
        } while (class_exists($formClassDetails->getFullName()));
        return $formClassDetails;
    }

}
