/* 
Porsentajes y Descuentos 
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

// ! Forumla: precio * (100 - descuent0) / 100


// var precioOriginal = 100;
// var descuento = 15;

var calcularPrecioConDescuento = (precio, descuento) => {
    var porcentajePrecioConDescuento = 100 - descuento;
    var precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


function botonCalcularPrecio() {
    var inputPrecio = document.getElementById('precio').value;
    var inputDescuento = document.getElementById('descuento').value;

    var calcularPrecio = calcularPrecioConDescuento(inputPrecio, inputDescuento);

    var resultado = document.getElementById('resultado').innerHTML = `<b>El Descuento es: $${calcularPrecio}</b>`;

}


function validarCupon() {
    precio = document.getElementById('precio2').value;
    cupon = document.getElementById('cupon').value;
     switch (cupon) {
        case "cupon-off-100%":
            var calcularPrecio = calcularPrecioConDescuento(precio, 100);
            var resultado = document.getElementById('descuentop').innerHTML = `<b>El Descuento es: $${calcularPrecio}</b>`;
            break
        case "cupon-off-50%":
            var calcularPrecio = calcularPrecioConDescuento(precio, 50);
            var resultado = document.getElementById('descuentop').innerHTML = `<b>El Descuento es: $${calcularPrecio}</b>`;
            break
        case "cupon-off-125%":
            var calcularPrecio = calcularPrecioConDescuento(precio, 50);
            var resultado = document.getElementById('descuentop').innerHTML = `<b>El Descuento es: $${calcularPrecio}</b>`;
            break
        
        case "cupon-off-15%":
            var calcularPrecio = calcularPrecioConDescuento(precio, 50);
            var resultado = document.getElementById('descuentop').innerHTML = `<b>El Descuento es: $${calcularPrecio}</b>`;
            break

        case "cupon-off-19%":
            var calcularPrecio = calcularPrecioConDescuento(precio, 50);
            var resultado = document.getElementById('descuentop').innerHTML = `<b>El Descuento es: $${calcularPrecio}</b>`;
            break

        case "cupon-off-5%":
            var calcularPrecio = calcularPrecioConDescuento(precio, 50);
            var resultado = document.getElementById('descuentop').innerHTML = `<b>El Descuento es: $${calcularPrecio}</b>`;
            break
        
        case "cupon-off-6%":
            var calcularPrecio = calcularPrecioConDescuento(precio, 50);
            var resultado = document.getElementById('descuentop').innerHTML = `<b>El Descuento es: $${calcularPrecio}</b>`;
            break
        default:
            var err = document.getElementById('error').innerHTML = `<b>Error el cupon no se encuentra</b>`;
     }
}



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });