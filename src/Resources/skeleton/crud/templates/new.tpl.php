<?= $helper->getHeadPrintCode('Ajout ' . $entity_class_name) ?>
{% block body %}
<div class="container">
    <div class="row">
        <div class="col">
            <h1>Création <?= $entity_class_name ?></h1>
            {{ include('<?= $route_name ?>/_form.html.twig', {'button_label': 'Ajouter'}) }}
            <div class="bottom_btns mt-3">
                <a class="btn btn-secondary" href="{{ path('<?= $route_name ?>_index') }}">
                    Retour
                </a>
            </div>
        </div>
    </div>
</div>
{% endblock %}
