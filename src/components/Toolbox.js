import React, { Component } from 'react'
import ToolboxNavbar from './ToolboxNavbar'
import '../App.css'

export class Toolbox extends Component {
    render() {
        return (
            <div className="toolbox">
                <ToolboxNavbar />

                <div class="ui fluid icon input">
                    <input type="text" placeholder="Search for a component" />
                    <i class="search icon"></i>
                </div>
            </div>
        )
    }
}

export default Toolbox
