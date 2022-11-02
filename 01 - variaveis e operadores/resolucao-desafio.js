
const precoCombustivel = 5.12;
const kmPorLitros = 9;
const distanciaEmKm = 100;

const valorGasto = (distanciaEmKm / kmPorLitros) * precoCombustivel;
console.log(valorGasto.toFixed(2));
