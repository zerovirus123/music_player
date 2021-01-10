import React, {Component} from "react";
import {render} from "react-dom";
import HomePage from "./HomePage"


// render this component inside div in index.html
export default class App extends Component{
    constructor(props){
        super(props);
    }

    // embeds JavaScript code into HTML text
    render(){
        return (<div>
            <HomePage />
            </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App name="music_player"/>, appDiv); // takes the App component and renders it to appDiv