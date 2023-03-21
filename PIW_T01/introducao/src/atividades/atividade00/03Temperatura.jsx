const Temperatura = () => {

    const celsiusParaFahrenheit = (celsius) => {
        return (9*celsius+160)/5
    }
     
    const fahrenheitParaCelsius = (farenheit) => (5*farenheit-160)/9 

    const kelvin = (kelvin) => {
        const celsius =  kelvin - 273
        const farenheit = (9*kelvin - 2297)/5
        return {celsius, farenheit}
    }

    let c = 30
    let f = 54
    let k = 0
    let {celsius,farenheit} = kelvin(k)
    return (
        <div>
            <h1>A temperatura {c} em Celsius é em Fahrenheit: {celsiusParaFahrenheit(c)}</h1>
            <h1>A temperatura {f} em Fahrenheit é em Celsius: {fahrenheitParaCelsius(f)}</h1>
            <h1>A temperatura em Kelvin é: {celsius}</h1>
            <h1>A temperatura em Kelvin é: {farenheit}</h1>
        </div>
    )
}

export default Temperatura