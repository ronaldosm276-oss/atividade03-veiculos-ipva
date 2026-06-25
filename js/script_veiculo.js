import { calculoSeguro, calculoIpva } from "./script_calculo.js"

const modelo = document.querySelector('#modelo')
const marca = document.querySelector('#marca')
const placa = document.querySelector('#placa')
const anofabricacao = document.querySelector('#ano')
const valorVeiculo = document.querySelector('#valor')
const form = document.querySelector('#form')
const adicionar = document.querySelector('#div-adicionar ')
const anoatual = 2026

//Isso poderia ser feito de forma mais inteligente e elegante com arrays e arrow function

/*
REGRAS DE NEGÓCIO
• Realizar os cálculos para identificar o tempo de
fabricação do veículo os valores do seguro obrigatório
e IPVA.
• Criar funções e para adicionar e listar os veículos;
• Criar um novo arquivo Javascript, criar uma função para
calcular o IPVA e exportar essa função.
• O arquivo Javascript que lista os veículos deve importar
a função do arquivo de cálculo.


FLUXO DA APLICAÇÃO
Usuário preenche formulário
↓
Clica em "Adicionar"
↓
JavaScript captura os dados
↓
Cria novo elemento na lista
↓
Exibe na tela
↓
Formulário é limpo

*/

let ipva = ''
let tempoFab = 0



form.addEventListener('submit', (evt) => {
  //para que isso serve?
  evt.preventDefault()

  const tipoComb = document.querySelector('input[name="typecomb"]:checked')
  console.log(tipoComb.value)
  //obviamente esse parte aqui tive ajuda da ia
  tempoFab = (anoatual - Number(anofabricacao.value))

  const ipvaResultado = calculoIpva(tempoFab, tipoComb.value, Number(valorVeiculo.value))

  let ipvaNaSoma;

  if (ipvaResultado === "isento") {
    ipvaNaSoma = 0;
  } else {
    ipvaNaSoma = ipvaResultado + ' reais';
  }

  const valorTotalFinal = Number(valorVeiculo.value) + calculoSeguro(Number(valorVeiculo.value)) + ipvaNaSoma + ' reais'

  adicionar.innerHTML +=

    `
        <p>
        Modelo: ${modelo.value},
        Marca: ${marca.value},
        Placa: ${placa.value},
        tempo de fabricação: ${tempoFab} anos,
        valor do veículo = ${valorVeiculo.value},
        seguro = ${calculoSeguro(Number(valorVeiculo.value))} reais,
        ipva = ${ipvaResultado}
        valor total = ${valorTotalFinal}
        </p><hr>
        `
        //p de paragrafo e hr para colocar aquelas linha
  document.querySelector('#form').reset();

})
