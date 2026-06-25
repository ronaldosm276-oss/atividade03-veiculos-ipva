
export function calculoIpva(tempoFab, tipoComb, valorVeiculo) {
    //Só peguei essa parte de export function var(a,b,c) por conta de ajuda de IA, preciso estudar mais sobre, a lógica eu fiz
    if (tempoFab >= 20) {
        return "isento"
    }

    else if (tipoComb == 'gasolina') {
        return Number(valorVeiculo) * 0.2
    }

    else if (tipoComb == 'etanol') {
        return Number(valorVeiculo) * 0.15
    }

    else if (tipoComb == 'bio'){
        return Number(valorVeiculo)* 0.1
    }
    else if (tipoComb == 'hibrido')
        return Number(valorVeiculo) * 0.08

    else if (tipoComb == 'eletrico') {
        return Number(valorVeiculo) * 0.02
    }
}

export function calculoSeguro(valorVeiculo) {
    return valorVeiculo * 0.1
}




/*
O seguro será fixado em 10% do
valor do veículo para todos os casos, enquanto o IPVA será
calculado de acordo com o tipo de combustível: veículos a
gasolina pagam 20%, etanol 15%, bicombustíveis 10%, híbridos
8% e elétricos 2%. Caso o veículo tenha mais de 20 anos de
fabricação, ele será considerado isento de IPVA, sendo
exibido esse status na listagem. Essas regras tornam a
aplicação mais inteligente e útil para o usuário.
Por fim, os dados cadastrados serão exibidos em uma lista
dinâmica abaixo do formulário, apresentando as seguintes
informações: placa do veículo, modelo, marca, ano, valor do
seguro, valor do IPVA (ou “Isento”, quando aplicável).
Por fim, os dados cadastrados serão exibidos em uma lista
dinâmica abaixo do formulário, apresentando as seguintes
informações: placa do veículo, modelo, marca, ano, valor do
seguro, valor do IPVA (ou “Isento”, quando aplicável). Essa
listagem será atualizada automaticamente a cada novo
cadastro, sem necessidade de recarregar a página,
proporcionando uma experiência interativa e demonstrando na
prática o uso de manipulação do DOM com JavaScript para
criação de aplicações web funcionais.

*/
