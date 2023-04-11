import { Children, cloneElement } from "react"
//V0
/*const Supermercado = ({children,nome}) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            {children}
        </div>
    )
}*/

//v1
/*const Supermercado = ({children,nome}) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            {
                Children.map(
                    children,
                    filho => 
                            <div style={{backgroundColor:"red"}}>
                                {filho}
                            </div>
                        
                )
            }
        </div>
    )
}*/

//v2
const Supermercado = ({children,nome}) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            {
                Children.map(
                    children,
                    filho =>
                        cloneElement(filho,{supermercado:nome})
                        
                )
            }
        </div>
    )
}

const Legume = ({nome,supermercado}) => 
    <div>
        <h3>Legume {nome} do Supermercado {supermercado}</h3>
    </div>

const Fruta = ({nome}) => 
    <div>
        <h3>Fruta {nome}</h3>
    </div>

const Bebida = ({nome}) => 
    <div>
        <h3>Bebida {nome}</h3>
    </div>

export {Supermercado, Legume, Fruta, Bebida }