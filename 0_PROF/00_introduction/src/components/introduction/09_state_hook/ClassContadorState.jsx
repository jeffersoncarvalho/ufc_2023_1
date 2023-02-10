import React from "react";

class ClassContadorState extends React.Component {

    constructor(props) {
        super(props)
        this.state = { contador: 0 }
        this.aumentarUm = this.aumentarUm.bind(this)
    }

    aumentarUm() {
        this.setState(
            (state) => {
                return { contador: state.contador + 1 }
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Contador: {this.state.contador}</h1>
                <button
                    onClick={
                        () => {
                            this.setState(
                                (state) => {
                                    return { contador: state.contador + 1 }
                                }
                            )
                        }
                    }
                >
                    Aumentar 1
                </button>
                <br />
                <button
                    onClick={this.aumentarUm}
                >
                    Aumentar 1 (V2)
                </button>
                <br />
                <button
                    onClick={()=>this.setState({contador:this.state.contador+1})}
                >
                    Aumentar 1 (V3)
                </button>
            </div>
        )
    }
}

export default ClassContadorState