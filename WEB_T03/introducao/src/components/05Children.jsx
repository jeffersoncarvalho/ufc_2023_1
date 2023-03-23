import { Children, cloneElement } from "react"

/*const Supermercado = ({children,nome}) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            {children}
        </div>
    )
}*/

//V1
/*const Supermercado = ({children,nome}) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            {
                Children.map(
                    children,
                    (filho)=>{
                        return (
                            <div style={{backgroundColor:"red"}}>
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
const Supermercado = ({children,nome}) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            {
                Children.map(
                    children,
                    (filho)=>{
                        return cloneElement(filho,{supermercado:nome})
                    }
                )
            }
        </div>
    )
}

const Legume = ({nome, supermercado}) => {
    return (
        <div>
            Legume {nome} do Supermercado {supermercado}
        </div>
    )    
}

const Bebida = ({nome, supermercado}) => {
    return (
        <div>
            Bebida {nome} do Supermercado {supermercado}
        </div>
    )    
}

export {Supermercado,Legume,Bebida}