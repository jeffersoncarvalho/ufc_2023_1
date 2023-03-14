//V0
/*function HelloWorld() {
    return <div>
        <h1>Jefferson de Carvalho</h1>
    </div>
}*/

import {Component} from "react";

//V1 precisa do ( ) para poder colocar abaixo do return
/*function HelloWorld() {
    return (
        <div>
            <h1>Jefferson de Carvalho</h1>
            <h1>Jefferson de Carvalho</h1>
        </div>
    ) 
}*/

//V2
/*const HelloWorld = () => {
    let x = 2
    let y = 3
    let res = x + y
    return (
        <div>
            <h1>Jefferson de Carvalho {res}</h1>
        </div>
    )
}*/

//V3
/*const HelloWorld = () =>
    <div>
        <h1>Jefferson de Carvalho {2 + 5}</h1>
    </div>
*/

class HelloWorld extends Component {
    render() {
        return (
            <div>
                <h1>Jefferson de Carvalho {2 + 5}</h1>
            </div>
        )
    }
}

export default HelloWorld