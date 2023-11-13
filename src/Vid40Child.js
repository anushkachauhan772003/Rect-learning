import React,{PureComponent} from "react";
export default class Vid40child extends PureComponent{
    render() {
        console.warn("checkRerendering")
        return (
            <div style={{border:"4px solid green", margin:"3px"}}>
                <h1>Pure Component {this.props.count}</h1>

            </div>
        )
    }
}