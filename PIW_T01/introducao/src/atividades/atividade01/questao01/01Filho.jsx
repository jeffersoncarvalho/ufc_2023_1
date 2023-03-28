const Filho = ({altura,peso}) => {

    const calcularIMC = (a,p) => p/(a*a)
    
    const renderizarMensagem = (imc) => {
        if(imc < 18) return <h3>Abaixo do peso</h3>
        else if(imc > 25) return <h3>Acima do peso</h3>
        return <h3>Peso ideal</h3>
    }

    const imcCalculado = calcularIMC(altura,peso)

    return (
        <div>
            <h1>Índice de Massa Corpórea {imcCalculado.toFixed(2)}</h1>
            {renderizarMensagem(imcCalculado)}
        </div>
    )
}
export default Filho