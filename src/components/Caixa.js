import React from 'react'
import { Card } from 'primereact/card'
import { connect } from 'react-redux'
const Caixa = (props) => {
    return (
        <Card
            title="Caixa"
            subTitle="Total incluindo pedidos de cartão e de cashback">
            <p className="text-center text-4xl">R${props.caixa}</p> 
        </Card>
    )
}
/*
    Essa função deverá percorrer cada fatia do estado
    Ela deve somar os valores da lista de pedidos de cartão, obtendo um total, digamos CART
    Ela deve somar os valores da lista de pedidos de cashback, obtendo um total, digamos CASH
    Ao final, ela deve devolver um JSON com uma única chave cujo nome você precisará descobrir, associada ao valor CART - CASH
    
    Dica1: Considere usar a função "reduce" do Javascript. Aliás, o nome reducer
    usado no Redux é inspirado nesta função. Veja alguns exemplos da função reduce:
    
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

    Dica2: Você pode descobrir o nome da chave a ser utilizada aqui mesmo, neste arquivo.
*/
const mapStateToProps = (state) => {

    //seu código aqui
    var CART = 0
    var CASH = 0

    //Função caixa antiga
    /*
    console.log(state.pedidosCartao)
    state.pedidosCartao.forEach(element => {
        CART += parseFloat(element.valor)
    });
    console.log(CART)
    
    console.log(state.pedidosCashback)
    state.pedidosCashback.forEach(element => {
        CASH += parseFloat(element.valor)
    });
    console.log(CASH)

    return {caixa: CART-CASH}
    */

    //Função caixa nova, utilizando o REDUCE
    const somaTodos = (valorTotal, payloadCurr) => valorTotal + parseFloat(payloadCurr.valor);

    CART = state.pedidosCartao.reduce(somaTodos, 0)

    CASH = state.pedidosCashback.reduce(somaTodos, 0)

    return {caixa: CART-CASH}

}
export default connect(mapStateToProps)(Caixa)
