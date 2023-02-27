const minhaPromise = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                //resolve("Deu tudo certo!")
                //reject("Deu tudo errado!")
                const myInt = Math.floor(Math.random() * 10) + 1
                //console.log(myInt)
                return (myInt % 2 === 0)?resolve("Deu tudo certo!"):reject("Deu tudo errado!")
            }
            ,
            3000
        )
    }
)

async function tratarPromessa() {
    try{
        const res = await minhaPromise
        console.log("OK: " + res)
    }catch(error){
        console.log("ERROR: " + error)
    }
}

const MeuAsync = () => {
    //tratarPromessa()
    return (
        <>
           <h1>Tratando Async</h1>
        </>
    )
}

export default MeuAsync