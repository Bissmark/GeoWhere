import React, { Component } from "react";
import { round } from "./Map";

class Round extends Component {
    render() {
        return (
            <div className="round">
                <p>Round { round } /5</p>
            </div>
        )
    }
}

export default Round;