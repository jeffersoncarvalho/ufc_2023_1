import React, { Component } from "react"

class MyFunctionClass extends Component {

    somar(x,y) {
        return x + y
    }

    subtrair(x,y) {
        return x - y
    }

    renderizar(resultado) {
        return (
            <div>
                <h2>O resultado é {resultado}</h2>
            </div>
        )
    }

    render() {
        const res = this.somar(10,5)
        return (
            <div>
                <h1>Minha Calculadora (Classe)</h1>
                {this.renderizar(res)}
            </div>
        )
    }

}

export default MyFunctionClass