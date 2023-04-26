const { useEffect } = require("react")

function somar(x,y) {
    return x + y
}

function get(url) {

    return new Promise(
        (resolve, reject) => {

            let resposta = { res: false, msg: "" }
            setTimeout(
                () => {
                    const x = 11
                    if (x % 2 === 0) {
                        resposta = { res: true, msg: "Deu certo!" }
                    } else {
                        resposta = { res: false, msg: "Deu errado!" }
                    }
                    if (resposta.res) resolve(resposta)
                    else reject(resposta)
                }
                ,
                5000
            )
        }
    )

}

const MinhaPromessa = () => {

    useEffect(
        () => {
            
            //console.log("Olá!")
            get("http://...")
                .then(
                    (response) => console.log(response.msg)
                )
                .catch(
                    (error) => {
                        console.log(error.msg)
                    }
                )
        }
        ,
        []
    )

    return (
        <>
            <h1>Testando a Promessa!</h1>
        </>
    )
}
export default MinhaPromessa