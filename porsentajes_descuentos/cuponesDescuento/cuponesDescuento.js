const listaCupones = [
    'cupon-off-100%',
    'cupon-off-50%',
    'cupon-off-125%',
    'cupon-off-15%',
    'cupon-off-19%',
    'cupon-off-5%',
    'cupon-off-6%',
];

function mistrarLista() {
     for(let i=0; i<listaCupones.length; i++) {
        // ? creamos una  variable que crea un elemnto
        //var cupon = document.createElement('li').innerHTML = `<li>${listaCupones[i]}</li>`;
        var cupon = document.createElement('li');
        cupon.innerHTML = `<li>${listaCupones[i]}</li><br />`;
        //var lista = document.getElementById("list").innerHTML = `<li>${listaCupones[i]}</li>`;
        document.getElementById("list").appendChild(cupon);
        //var lista = listaCupones[i];
        //console.log(lista);
     }

    return lista;
}

mistrarLista()
