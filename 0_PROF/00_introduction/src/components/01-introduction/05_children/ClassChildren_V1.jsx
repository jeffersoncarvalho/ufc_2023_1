import React, { Component, Children } from "react";

class Supermercado extends Component {
    render() {
        console.log(this.props.children)
        return (
            <div>
                <h1>Supermercado {this.props.nome}</h1>
                {
                    Children.map(
                        this.props.children,
                        (child) => {
                            return child
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
                <h2>Fruta: {this.props.nome}</h2>
            </div>
        )
    }
}

class Legume extends Component {
    render() {
        return (
            <div>
                <h2>Legume: {this.props.nome}</h2>
            </div>
        )
    }
}

class Bebida extends Component {
    render() {
        return (
            <div>
                <h2>Bebida: {this.props.nome}</h2>
            </div>
        )
    }
}

export {Supermercado, Fruta, Legume, Bebida}