import { Children, cloneElement } from "react"

const Supermercado = ({ children, nome, cidade }) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            <h2>Cidade: {cidade}</h2>
            {
                Children.map(
                    children,
                    (child) => {
                        return cloneElement(child, { supermercado: nome, cidade })
                    }
                )
            }
        </div>
    )
}

const Legume = ({nome,supermercado,cidade}) =>
    <div>
        <h2>Legume: {nome}, no {supermercado} do {cidade}</h2>
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