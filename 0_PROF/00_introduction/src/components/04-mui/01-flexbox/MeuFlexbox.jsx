const MeuFlexBox = () => {

    return (
        <div
            style={{
                display: "flex",

                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-start",

                flexWrap: "wrap",

                backgroundColor: "#c0c0c0",
                height: "600px"
            }}
        >
            <Caixa cor="yellow" />
            <Caixa cor="red" />
            <Caixa cor="blue" />
            <Caixa cor="green" />
            <Caixa cor="yellow" />
            <Caixa cor="green" />
            <Caixa2 cor="pink" />
            <Caixa cor="yellow" />
            <Caixa cor="red" />
            <Caixa cor="blue" />
            <Caixa cor="green" />
            <Caixa cor="yellow" />
            <Caixa cor="green" />
            <Caixa2 cor="pink" />n b nb 
          
        </div>
    )

}

const Caixa = ({ cor }) => {
    return (
        <div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: cor,
            }}>
        </div>
    )
}
const Caixa2 = ({ cor }) => {
    return (
        <div
            style={{
                width: "100px",
                height: "200px",
                backgroundColor: cor,
            }}>
        </div>
    )
}

const Texto = ({ cor }) => {
    return (
        <div
            style={{
                backgroundColor: cor,
            }}>
                Jefferson
        </div>
    )
}

export default MeuFlexBox