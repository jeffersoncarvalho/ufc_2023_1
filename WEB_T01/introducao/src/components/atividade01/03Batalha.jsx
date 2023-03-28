import {Children, cloneElement} from 'react'
import Harry from '../../assets/harry.png'

const Hero = ({name,arena}) => {
    return (
        <div>
            <h1>Sou Herói e meu nome é: {name} estou na Arena {arena}</h1>
            <img 
                src={Harry}
                alt="Aragão"
                style={{width:"240px"}}
                />
        </div>
    )
}

const Enemy = ({name}) => {
    return (
        <div>
            <h1>Sou Inimigo e meu nome é: {name}</h1>
            <img 
                src="https://www.quixada.ufc.br/wp-content/uploads/2015/05/Jefferson-de-Carvalho-Silva1-240x320.png"
                alt="Jefferson"
                style={{width:"240px"}}
                />
        </div>
    )
}

const Arena = ({name}) => {
    return (
        <div>
            <h1>Arena: {name}</h1>
            <Hero name="Super Aragas" />
            <Enemy name="Jeff Mastermind" />
        </div>
    )
}

const Arena2 = ({name,children}) => {
    return (
        <div>
           <h1>Arena: {name}</h1>
           {
            Children.map(
                children,
                (child) => {
                    return cloneElement(child,{arena:name})
                }
            )
           }
        </div>
    )
}
const World = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export {Hero, Enemy, Arena, Arena2, World}