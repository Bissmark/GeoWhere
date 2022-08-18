import React, { Component } from "react";
import { round } from "./Map";

class Round extends Component {

    render() {
        console.log(round);
        return (
            <div>
                <p>Round { round } /5</p>
            </div>
        )
    }
}

export default Round;