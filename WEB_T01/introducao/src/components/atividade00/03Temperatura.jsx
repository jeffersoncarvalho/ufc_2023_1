
const Temperatura = () => {
    
    const celsiusParaFahrenheit = (celsius) => (9*celsius + 160)/5
    const fahrenheitParaCelsius = (fahrenheit) => (fahrenheit - 32)*(5/9)
    const kelvin = (kelvin) => {
        const celsius = kelvin - 273
        const fahrenheit = (kelvin - 273)*9/5 + 32
        return {celsius,fahrenheit}
    }
     
    //main
    const c = 30
    const f = 67
    const k = 0
    const {celsius,fahrenheit} = kelvin(k)
    return (
        <>
            <h1>A temperatura {c} Celsius para Fahrenheit é: {celsiusParaFahrenheit(c)}</h1>
            <h1>A temperatura {f} Fahrenheit para Celsius é: {fahrenheitParaCelsius(f)}</h1>
            <h1>A temperatura {k} Kelvin é: {JSON.stringify(kelvin(k))}</h1>
            <h1>A temperatura {k} Kelvin em Celsius é: {kelvin(k).celsius}</h1>
            <h1>A temperatura {k} Kelvin em Fahrenheit é: {kelvin(k).fahrenheit}</h1>
            <h1>A temperatura {k} Kelvin em Celsius é: {celsius}</h1>
            <h1>A temperatura {k} Kelvin em Fahrenheit é: {fahrenheit}</h1>
        </>
    )
}

export default Temperatura
