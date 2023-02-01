import React, { Component } from "react";

class Supermercado extends Component {
    render() {
        return (
            <div>
                <h1>Supermercado Tabajara</h1>
                {this.props.children}
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