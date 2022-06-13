/* 
Calculadora figuras geometricas

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

//> Codigo del el cuadrado

// let ladoCuadrado = 5;
// Los lados de el cuadrado miden: ${ladoCuadrado}cm`);


function perimetroCuadrado(lado){
    return lado * 4;
}

// El perimetro de el cuadrado es: ${perimetroCuadrado}cm`);


function areaCuadrado(lado) {
    return lado ** 2;
}
// El perimetro de el cuadrado es: ${areaCuadrado}cm^2`);


//> Codigo de el triangulo
// Triangulos");
// let ladoTriangulo1 = 6;
// let ladoTriangulo2 = 6;
// let alturaTriandulo = 5.5;
// let baseTriangulo = 4;
// Los lados de el triangulo miden: 
// ${ladoTriangulo1}cm  
// ${ladoTriangulo2}cm 
// y su base es: ${baseTriangulo}`
// );

// La altura de el triangulo es: ${alturaTriandulo}`);


// let perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// El perimetro de el triangulo es: ${perimetroCuadrado}cm`);

// let areaTriangulo = (baseTriangulo * alturaTriandulo) / 2;
// El area de el triangulo es: ${areaTriangulo}cm^2`);

function perimetroTriangulo(lado1, lado2, base) {
 return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}





//> Codigo de el circulo

// Radio
// let radioCircle = 4;
// Diametro
function diametroCircle(radio){
    return radio * 2;
} 
// PI
let PI = Math.PI;

// Circunferencia
function circunferencia(radio) {
    let diametro = diametroCircle(radio);
    return diametro * PI;
} 
// Area
function areaCirculo(radio) {
    return (radio**2) * PI;
}

// 
// El Radio de el circulo es: ${radioCircle}cm

// El diametro de el circulo es: ${diametroCircle}cm

// La circunferencia o parimetro de el circulo es: ${perimetroCirculo}cm

// El area del el circulo es: ${areaCircle}cm^2

// `)



function calcularPerimetroCuadrado() {
    let input = document.getElementById("InputCuadrado");
    let valor = input.value;

    let perimetro = perimetroCuadrado(valor);

    alert(`El perimetro es: ${perimetro}`);
}


function calcularAreaoCuadrado() {
    let input = document.getElementById("InputCuadrado");
    let valor = input.value;

    let area = areaCuadrado(valor);

    alert(`El area es: ${area}`);
    
}


function calcularPerimetroTriangulo() {
    let input1 = document.getElementById("InputTriangulo1");
    let input2 = document.getElementById("InputTriangulo2");
    let input3 = document.getElementById("InputTriangulo3");

    let ladoOne = input1.value;
    let ladoTwo = input2.value;
    let base = input3.value;

    let perimetro = perimetroTriangulo(ladoOne, ladoTwo, base);

    alert(`El perimetro de el triangulo es: ${perimetro}`);
}

function clacularAreaTriangulo() {
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;

    let area = areaTriangulo(base, altura);

    alert(`EL area es: ${area}`);

}


function calcularDiametroCirculo() {
    let radio = document.getElementById("radioDiametro").value;

    let diametro = diametroCircle(radio);

    alert(`El diametro es: ${diametro}`);
    
}


function calcularCircunferenciaCirculo() {
    let radio = document.getElementById("circunferencia").value;

    let circunferencias = circunferencia(radio);

    alert(`La circunferencia es ${circunferencias}`);
}

function calcularAreaCirculo() {
    let radio = document.getElementById("radioArea").value;

    let area = areaCirculo(radio);

    alert(`El area es" ${area}`);
}