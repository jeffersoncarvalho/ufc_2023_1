import React, { Component } from "react";

class ClassProps extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h1>My Class Props: {this.props.nome}</h1>
            </div>
        )
    }
}

export default ClassProps