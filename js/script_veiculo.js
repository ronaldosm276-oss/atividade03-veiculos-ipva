const modelo = document.querySelector('#modelo')
const marca = document.querySelector('#marca')
const placa = document.querySelector('#placa')
const anofabricacao = document.querySelector('#ano')
const valorVeiculo = document.querySelector('#valor')
const botao = document.querySelector('#submit')
const adicionar = document.querySelector('#div-adicionar ')
const anoatual = 2026
import  {calculoSeguro} from "./script_calculo.js"
import  {calculoIPVA} from "./script_calculo.js"

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



botao.addEventListener('click', (evt) => {
    //para que isso serve?
      evt.preventDefault()

        const tipoComb = document.querySelector('input[name="typecomb"]:checked')
        console.log(tipoComb.value)
        //obviamente esse parte aqui tive ajuda da ia
        let tempoFab = (anoatual - Number(anofabricacao.value))
        adicionar.innerHTML = `${modelo.value}, ${marca.value}, ${placa.value}, ${tempoFab} tempo de fabricação ${tempoFab} anos, ${valorVeiculo.value}`

        console.log(tempoFab)
        console.log(calculoIPVA)
        console.log(calculoSeguro)

//inputIdade.value = ''
//inputNome.value = '' ; para resetar??

})