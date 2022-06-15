/* 
Promedio Mediana Moda

Copyright (C) 2022  jakepy <j4kyjak3@protonmail.com>
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/


const mitadArray = pasrseInt(array.length / 2);
var mediana;

function calcularPromedio(array) {
    var sumaArray = array.reduce((valorAcumulado, nuevoELemnto) => {
        return valorAcumulado + nuevoELemnto;
    });

    var promedio = sumaArray / array.length;
    return promedio;

}


function esPar(n) {
    if(n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


if (esPar(array.length)) {
  const elemento1 = array[mitadArray - 1];
  const elemento2 = array[mitadArray];

  const promedioElementoUnoYDos = calcularPromedio([elemento1, elemento2]);

  mediana = promedioElementoUnoYDos;
} else {
  mediana = array[mitadArray];
}