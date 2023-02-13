import React from "react";
import ColorTheme from "./MyColorContext";

class ClassA extends React.Component {

    render() {
        return (
            <ColorTheme.Provider value="green">
                <ClassB />
            </ColorTheme.Provider>
        )
    }
}

class ClassB extends React.Component {

    render() {
        let value = this.context
        return (
            <div>
                <h1 style={{ color: value }}>
                    Contexto B
                </h1>
            </div>
        )
    }
}

ClassB.contextType = ColorTheme

export default ClassA