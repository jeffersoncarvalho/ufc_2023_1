import React, { Component, Children, cloneElement } from "react";

/*class Supermercado extends Component {
    render() {
        console.log(this.props.children)
        return (
            <div>
                <h1>Supermercado {this.props.nome}</h1>
                <h2>Cidade: {this.props.cidade}</h2>
                {
                    Children.map(
                        this.props.children,
                        (child) => {
                            return cloneElement(child,{supermercado:this.props.nome, cidade: this.props.cidade})
                        }
                    )
                }
            </div>
        )
    }
}*/

class Supermercado extends Component {
    render() {
        //console.log(this.props.children)
        const {children,nome,cidade} = this.props
        return (
            <div>
                <h1>Supermercado {nome}</h1>
                <h2>Cidade: {cidade}</h2>
                {
                    Children.map(
                        children,
                        (child) => {
                            return cloneElement(child,{supermercado:nome, cidade})
                        }
                    )
                }
            </div>
        )
    }
}

class Fruta extends Component {
    render() {
        return (
            <div>
                <h3>Fruta: {this.props.nome}, Supermercado: {this.props.supermercado}, Cidade: {this.props.cidade}</h3>
            </div>
        )
    }
}

class Legume extends Component {
    render() {
        return (
            <div>
                <h3>Legume: {this.props.nome}</h3>
            </div>
        )
    }
}

class Bebida extends Component {
    render() {
        return (
            <div>
                <h3>Bebida: {this.props.nome}</h3>
            </div>
        )
    }
}

export {Supermercado, Fruta, Legume, Bebida}