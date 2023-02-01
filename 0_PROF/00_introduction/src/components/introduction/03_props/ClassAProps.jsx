import React, {Component} from "react";
import ClassBProps from "./ClassBProps";

class ClassAProps extends Component {

    render(){
        return (
            <div>
                <ClassBProps x={10} y={5} />
            </div>
        )
    }
}

export default ClassAProps