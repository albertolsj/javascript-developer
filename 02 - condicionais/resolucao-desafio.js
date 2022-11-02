// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
//  1 - Preço do etanol;
//  2 - Preço do gasolina;
//  3 - O tipo de combustível que está no seu carro;
//  4 - Gasto médio de combustível do carro por KM;
//  5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.
//Feito uma alteração pois o consumo de alcool é diferente de gasolina.
const precoEtanol = 3.79;
const precoGasolina = 5.12;
const kmPorLitrosGasolina = 10;
const kmPorLitrosEtanol = 8;
const distanciaEmKm = 100;

  const valorGastoEtanol = (distanciaEmKm / kmPorLitrosEtanol) * precoEtanol;
  console.log( 'Gasto com Etanol:');
  console.log( valorGastoEtanol.toFixed(2));

  const valorGastoGasolina = (distanciaEmKm / kmPorLitrosGasolina) * precoGasolina;
  console.log( 'Gasto com Gasolina:');
  console.log(valorGastoGasolina.toFixed(2));
