import React, {Component} from "react";

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Site Header - Cabeçalho</h1>
            </div>
        )
    }
}

class Body extends Component {
    render() {
        return (
            <div>
                <h1>Site Body - Corpo</h1>
            </div>
        )
    }
}

class Footer extends Component {
    render() {
        return (
            <div>
                <h1>Site Footer - Footer</h1>
            </div>
        )
    }
}

export {Header,Body,Footer}