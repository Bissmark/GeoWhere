import React, { Component } from "react";
//import { round } from "./Map";

export let round = 1;

class Round extends Component {
    //let round = 1;

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