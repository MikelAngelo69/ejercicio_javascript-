let inicio = 0;
let limite = 42;

let secuenciaMap = new Map();

const generarMapaFibonacci = (desde, hasta) => {
    let primer = desde;
    let segundo = desde + 1;
    let contador = 0;
    let listaTemporal = [primer, segundo];

    secuenciaMap.set(contador++, primer);

    while (true) {
        let siguienteNumero = primer + segundo;
        if (siguienteNumero > hasta) break;
        listaTemporal.push(siguienteNumero);
        primer = segundo;
        segundo = siguienteNumero;
        secuenciaMap.set(contador++, segundo);
    }

    return secuenciaMap;
};

console.log(generarMapaFibonacci(inicio, limite));

const obtenerFibonacciLista = (minimo, maximo) => {
    let x = minimo;
    let y = minimo + 1;
    let resultado = [x, y];

    while (true) {
        let siguiente = x + y;
        if (siguiente > maximo) break;
        resultado.push(siguiente);
        x = y;
        y = siguiente;
    }

    return resultado;
};

console.log(obtenerFibonacciLista(inicio, limite));

const construirSecuencia = (base, tope) => {
    let primero = base;
    let segundo = base + 1;
    let serie = [primero, segundo];

    while (true) {
        let prox = primero + segundo;
        if (prox > tope) break;
        serie.push(prox);
        primero = segundo;
        segundo = prox;
    }

    return serie;
};

console.log(construirSecuencia(inicio, limite));

const generarFibonacciConSet = (desde, hasta) => {
    let primero = desde;
    let segundo = desde + 1;
    let lista = [primero, segundo];

    while (true) {
        let siguiente = primero + segundo;
        if (siguiente > hasta) break;
        lista.push(siguiente);
        primero = segundo;
        segundo = siguiente;
    }

    return new Set(lista);
};

console.log(generarFibonacciConSet(inicio, limite));
