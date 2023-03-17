import React from "react"

//V0
/*function HelloWorld() {
    return (
        <div>
            <h1>Jefferson</h1>
        </div>
    )
}*/

//V1
/*const HelloWorld = () => {
    let x = 2
    let y = 5
    let res = x + y
    return (
        <div>
            <h1>Jefferson com Arrow Function {res +10}</h1>
        </div>
    )
}*/

//V2
/*const HelloWorld = () =>
    <div>
        <h1>Jefferson com Arrow Function</h1>
    </div>*/

//V3
class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1>Jefferson com Classes</h1>
            </div>
        )
    }
}

export default HelloWorld