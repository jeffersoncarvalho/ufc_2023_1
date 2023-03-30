import { Children, cloneElement } from "react"
import Superman from '../../assets/superman.png'

const Hero = ({name,arena}) => {
    return (
        <div>
            <h1>Sou o herói {name} lutando na arena {arena}</h1>
            <img 
                src={Superman}
                style={{width:"240px"}}
                alt="O herói"
            />
        </div>
    )
}

const Enemy = ({name}) => {
    return (
        <div>
            <h1>Sou o inimigo {name}</h1>
            <img 
                src="https://www.quixada.ufc.br/wp-content/uploads/2015/05/Jefferson-de-Carvalho-Silva1-240x320.png"
                style={{width:"240px"}}
                alt="O inimigo."
            />
        </div>
    )
}

const Arena = () => {
    return (
        <div>
            <Hero name="Super Wlads" />
            <Enemy name="Dr. Jeff MasterMind" />
        </div>
    )
}

const Arena2 = ({name,children}) => {
    return (
        <div>
            <h1>Arena {name}</h1>
            {
                Children.map(
                    children, //inicialização
                    (filho) => {
                        return cloneElement(filho,{arena:name})
                    } // função seta
                )//map
            }
        </div>
    )
}

const World = ({children}) => {
    return (
        <>
            {children}
        </>
    )
}

export {Hero, Enemy, Arena, Arena2, World}