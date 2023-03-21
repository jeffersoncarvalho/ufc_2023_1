//V0
/*const Supermercado = (props) => {
    return (
        <div>
            <h1>Supermercado {props.nome}</h1>
            {props.children}
        </div>
    )
}*/
import { Children, cloneElement } from "react"
//V1
/*const Supermercado = (props) => {
    return (
        <div>
            <h1>Supermercado {props.nome}</h1>
            {
                Children.map(
                    props.children,
                    (filho) => {
                        return (
                            <div style={{backgroundColor:"#c0c0c0"}}>
                                {filho}    
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}*/

//V2
const Supermercado = (props) => {
    return (
        <div>
            <h1>Supermercado {props.nome}</h1>
            {
                Children.map(
                    props.children,
                    (filho) => {
                        return cloneElement(filho,{supermercado:props.nome})
                    }
                )
            }
        </div>
    )
}

const Legume = ({ nome, supermercado }) => {
    return (
        <div>
            <h3>Legume {nome} no Supermercado {supermercado}</h3>
        </div>
    )
}

const Fruta = ({ nome, supermercado }) => {
    return (
        <div>
            <h3>Fruta {nome} o Supermercado {supermercado}</h3>
        </div>
    )
}

const Bebida = ({ nome, supermercado }) => {
    return (
        <div>
            <h3>Bebida {nome} o Supermercado {supermercado}</h3>
        </div>
    )
}

export { Supermercado, Legume, Fruta, Bebida }