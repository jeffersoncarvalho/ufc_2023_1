import React, { Component } from "react";

class ClassBProps extends Component {

    render() {

        const {x,y} = this.props

        return (
            <div>
                <h1>A Soma é {x + y}</h1>
            </div>
        )
    }
}

export default ClassBProps