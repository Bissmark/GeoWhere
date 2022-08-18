import React, { Component } from "react";
//import { round } from "./Map";

let round = 1;

class Round extends Component {
    

    render() {
        console.log(round);
        return (
            <div className="round">
                <p>Round { round } /5</p>
            </div>
        )
    }
}

export default Round;