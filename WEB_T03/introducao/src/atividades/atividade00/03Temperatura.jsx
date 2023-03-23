

const Temperatura = () => {

    const celsiusParaFahrenheit = celsius => (9*celsius + 180)/5
    const fahrenheitParaCelsius = (fahrenheit) => {
        return (5*fahrenheit - 180)/9
    }
    const kelvin = (k) => {
        const c = k - 273
        const f = k*1.8 - 459.4
        return {c,f}
    }

    const c = 30
    const f = 45
    const k = 0
    const {c:celsius,f:fahrenheit} = kelvin(k)
    return (
        <div>
            <h1>{c} Celsius para Fahrenheit: {celsiusParaFahrenheit(c)}</h1>
            <h1>{f} Fahrenheit para Celsius: {fahrenheitParaCelsius(f)}</h1>
            <h1>{k} Kelvin: {kelvin(k).c}</h1>
            <h1>{k} Kelvin: {kelvin(k).f.toFixed(2)}</h1>
            <h1>{k} Kelvin: {JSON.stringify(kelvin(k))}</h1>
            <h1>{k} Kelvin para Celsius: {celsius} </h1>
            <h1>{k} Kelvin para Fahrenheit: {fahrenheit} </h1>
        </div>
    )
}
export default Temperatura