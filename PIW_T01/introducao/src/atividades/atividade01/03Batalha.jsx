const Hero = ({name}) => {
    return (
        <div>
            <h1>Sou o herói {name}</h1>
            <img
                src="https://www.quixada.ufc.br/wp-content/uploads/2015/11/João-240x320.png"
                alt="Meu herói!"
                style={{width:"100px"}} 
            />
        </div>
    )
}

const Enemy = ({name}) => {
    return (
        <div>
            <h1>Sou o Inimigo {name}</h1>
            <img
                src="https://www.quixada.ufc.br/wp-content/uploads/2015/05/Wlademir-Araujo-Tavares1-240x320.png"
                alt="Meu inimigo!"
                style={{width:"100px"}} 
            />
        </div>
    )
}

const Arena = () => {
    return (
        <div>
            <Hero name="Vilnei" />
            <Enemy name="Wlads" />
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