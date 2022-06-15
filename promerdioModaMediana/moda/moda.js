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

function obtenerModa(array) {
    const arrayContados = {};
    array.map((elemento) => {
    if (arrayContados[elemento]) {
        arrayContados[elemento] += 1;
    } else {
        arrayContados[elemento] = 1;
    }
    });
    const listaArray1 = Object.entries(arrayContados).sort((elementoA,elementoB) => {
        return elementoA[1] - elementoB[1];
    });
    const moda = listaArray1[listaArray1.length - 1];

    return moda;
}





console.log(obtenerModa([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,,7,7,7,7,6,6,6,6,5,5,5,5,4,4,4,4,3,3,3,3,2,2,2,2,1]));
