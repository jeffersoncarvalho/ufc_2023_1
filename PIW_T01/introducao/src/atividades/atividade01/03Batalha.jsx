import { Children, cloneElement } from 'react'

import Gato from '../../assets/gato.png'

const Hero = ({name, nomeDaArena}) => {
    return (
        <div>
            <h1>Sou o herói {name} e estou lutando na arena {nomeDaArena}</h1>
            <img
                src={Gato}
                alt="Meu herói!"
                style={{width:"100px"}} 
            />
        </div>
    )
}

const Enemy = ({name,nomeDaArena}) => {
    return (
        <div>
            <h1>Sou o Inimigo {name} e estou lutando na arena {nomeDaArena}</h1>
            <img
                src="https://www.quixada.ufc.br/wp-content/uploads/2015/05/Wlademir-Araujo-Tavares1-240x320.png"
                alt="Meu inimigo!"
                style={{width:"100px"}} 
            />
        </div>
    )
}

const Arena = ({name,children}) => {
    return (
        <div>
            <h1>Arena {name}</h1>
            {
                Children.map(
                    children,
                    (filho)=>{
                        return cloneElement(filho,{nomeDaArena:name})
                    }
                )
            }
        </div>
    )
}

const World = ({children}) => {
    return (
        <div>
            {children}    
        </div>
    )
}

export {Hero, Enemy, Arena, World}