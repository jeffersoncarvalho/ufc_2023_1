const Calculadora = () => {

    function somar(x,y) {
        return x + y
    }

    const subtrair = (x,y) => {
        return x - y
    }

    const multiplicar = (x,y) => x * y

    const dividir = (x,y) => x / y

    const chamarDividir = (minhaDivisao) => {
        return minhaDivisao(50,5)
    }

    const renderizar = () => <h1>JSX de Função Interna</h1>

    return (
        <div>
            <h1>O resultado da soma é: {somar(10,5)}</h1>  
            <h1>O resultado da subtração é: {subtrair(10,5)}</h1>
            <h1>O resultado da multiplicação é: {multiplicar(10,5)}</h1>
            <h1>O resultado da divisão é: {chamarDividir(dividir)}</h1>
            {renderizar()}            
        </div>
    )
} 

export default Calculadora 