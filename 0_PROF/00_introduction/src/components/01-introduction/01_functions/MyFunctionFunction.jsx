const MyFunctionFunction = () => {

    function somar(x,y){
        return x + y
    }

    const subtrair = (x,y) => {
        return x - y
    }

    const renderizar = (resultado) =>
        <div>
            <h2>O resultado é {resultado}</h2>
        </div>
    
    const res = subtrair(10,5)
    return (
        <div>
            <h1>Minha Calculadora Função</h1>
            {renderizar(res)}
        </div>
    )

}

export default MyFunctionFunction