<?php
$min = 0;
$max = 200;

$values = [10, 150, 110, 85, 73, 94, 100, 180, 200, 0];

$median = ($min + $max) / 2;

foreach ($values as $value) {
    $centeredValue = $value - $median;
    var_dump(($centeredValue * $centeredValue));
}