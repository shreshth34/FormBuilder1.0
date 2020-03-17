import React, { Component } from "react";
import "/home/local/INTERNAL/shreshth.j/Desktop/FormBuilder1.0/FormBuilder1.0/src/App.css";
import AddField from "./RendererComponents/AddField";

export class Renderer extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="renderer">
                <div className="header"> {this.props.title} <br /> {this.props.desc}</div>
                <div className="ui grid">
                    <div className="eight wide column">
                        <AddField />
                    </div>
                    <div className="eight wide column">
                        <AddField />
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Renderer;
