
//! importamos
const {colombia} = require("./salarios");

//> traemos la propuedad de salario 
const salariosCol = colombia.map((salarios) => {
  return salarios.salario;
});

//> ordenamos de manera ordenada los danots de el salario
const salariosColOrdenados = salariosCol.sort((salarioA, salarioB) => {
  return salarioA - salarioB;
});


//> Verificamos si es par o no
var esPar = (n) => {
  return true ? n % 2 === 0 : false;
  // if(n % 2 === 0) {
  //     return true;
  // } else {
  //     return false;
  // }
};

//> calculamos la mediana
function calcularMediana(array) {
  var sumaArray = array.reduce((valorAcumulado, nuevoELemnto) => {
    return valorAcumulado + nuevoELemnto;
  });

  var promedio = sumaArray / array.length;
  return promedio;
}


const medianaSalarioCol = (array) => {
  const mitad = parseInt(array.length / 2);

  if (esPar(array.length)) {
    const personaMitadArrayUno = array[mitad - 1];
    const personaMitadArrayDos = array[mitad];

    const mediana = calcularMediana([personaMitadArrayUno, personaMitadArrayDos]);

    return mediana;
  } else {
    const personaMitadArray = lista[mitad];
    return personaMitadArray;
  }
};


const mediadaGeneralCol = medianaSalarioCol(salariosColOrdenados);

//>Mediana Top 10
const spliceStart = (salariosColOrdenados.length * (100 - 10) / 100);
const splicePedasos = salariosColOrdenados.length - spliceStart;
const salarioColTopDiez = salariosColOrdenados.splice(spliceStart, splicePedasos);


const medianaTopDiez = medianaSalarioCol(salarioColTopDiez);

console.log(
    mediadaGeneralCol,
    medianaTopDiez
);


