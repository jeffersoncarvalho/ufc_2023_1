import { Children } from "react"

const Supermercado = (props) => {
    return (
        <div>
            <h1>Supermercado Tabajara</h1>
            <h3>Cidade: {props.cidade}</h3>
            {
                Children.map(
                    props.children,
                    (child) => {
                        return child
                    }
                )
            }
        </div>
    )
}

const Legume = (props) =>
    <div>
        <h2>Legume: {props.nome}</h2>
    </div>

const Fruta = (props) =>
    <div>
        <h2>Fruta: {props.nome}</h2>
    </div>

const Bebida = (props) =>
    <div>
        <h2>Bebida: {props.nome}</h2>
    </div>

export { Supermercado, Legume, Fruta, Bebida }