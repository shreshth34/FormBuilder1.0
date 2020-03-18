import React, { Component } from "react";
import "../App.css";
import AddField from "./RendererComponents/AddField";

export class Renderer extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            
            <div className="renderer">
                <button>new row</button>               
                <div className="header"> {this.props.title} <br /> {this.props.desc}</div>
                <div className="ui container">
                <div className="ui grid">
                    <div className="eight wide column">
                        <AddField />
                    </div>
                    <div className="eight wide column">
                        <AddField />
                    </div>
                    
                </div>
                </div>
            </div>
        );
    }
}

export default Renderer;
