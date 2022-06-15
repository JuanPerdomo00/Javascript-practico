//? la lista de numero tiene que estar ordenada
//? crear funciones para recivir el array

var mediana;


function calcularPromedio(array) {
    let arrayOrdenado = array.sort((a,b) => {
        return  a-b;
    });
    var sumaArray = arrayOrdenado.reduce((valorAcumulado, nuevoELemnto) => {
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


function calcularMediana(array) {
    var mitadArray = parseInt(array.length / 2);
    let arrayOrdenado = array.sort((a,b) => {
        return  a-b;
    });
    console.log(arrayOrdenado); // los ordena

    if (esPar(arrayOrdenado.length)) {
        const elemento1 = arrayOrdenado[mitadArray - 1];
        const elemento2 = arrayOrdenado[mitadArray];
      
        const promedioElementoUnoYDos = calcularPromedio([elemento1, elemento2]);
      
        mediana = promedioElementoUnoYDos;
        return mediana

      } else {
        mediana = arrayOrdenado[mitadArray];
        return mediana;
      }
}

var medianaResultado = calcularMediana([30,10,40,50,20,60,80,90,70,500,800,100,92,45]);
console.log(`La mediana es ${medianaResultado}`);