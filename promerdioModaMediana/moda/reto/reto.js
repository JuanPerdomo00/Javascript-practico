// ! media Geometrica

function mediaGeometrica(array) {
//      var n = array.length;
//      var ultimaPocicionArray = array[array.length - 1];
//      var organizarData = array.sort((a, b) => {
//          return a - b
//      });



//     var mG = array.reduce((x, y) => {
//         return x * y;
//     });
    
//     var calcular = mG ** (1 / n);
//     console.log(calcular);
// }

    var n = array.reduce((a, b) => {
        return a * b
    });

    if(n <= 0) {
        console.log("No se permiten numero negativos")
    } else {
        return n ** (1 / array.length);
    }

}    



console.log(mediaGeometrica([4,9,3,6,5,4,2]));