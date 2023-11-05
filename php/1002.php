<?php

$pi = 3.14159;

$raio = fgets(STDIN);

number_format($raio, 2, '.', '');

$area = $pi * ($raio * $raio);

$resultadoFormatado = number_format($area, 4, '.', '');


echo "A=$resultadoFormatado\n";


?>