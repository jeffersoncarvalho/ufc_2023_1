const Filho = ({altura,peso}) => {

    const calcularIMC = (a,p) => p/(a*a)
    
    const renderizerMensagem = (imc) => {
        if(imc > 25) return <h3>Acima do peso</h3>
        else if (imc < 18) return <h3>Acima do peso</h3>
        return <h3>Peso ideal</h3>
    } 

    //main
    const imc = calcularIMC(altura,peso)
    return (
        <div>
            <h1>O IMC é: {imc.toFixed(2)}</h1>
            {renderizerMensagem(imc)}
        </div>
    )
}
export default Filho