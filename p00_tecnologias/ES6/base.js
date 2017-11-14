var aDatos = [{precio : 22}, {precio : 34}, {precio : 57}];

nIva = 1.22;
/* aDatos.forEach(
    function (elem) {
        precioFinal = elem.precio * nIva;    
    }
); */
aDatos.forEach(
    elem => {
        precioFinal = elem.precio * nIva;
        console.log(
            `El precio final es: 
            ${precioFinal}`
        );
    }
);