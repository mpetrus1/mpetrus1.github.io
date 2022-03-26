import { Hero } from "../components/Hero";
import Exercise2Image from "../components/Exercise2Image";
import Exercise3Data from "../components/Exercise3Data";
import React, {useContext} from "react";
import {AppContext} from "../AppContextProvider";

export default function Main(){
    const {appState} = useContext(AppContext);
    const {option} = appState;
    console.log(`Current state: ${option}`)
    console.log(appState)
    let renderingPart = <div>Empty</div>;
    switch (option){
        case 1:
            renderingPart = <Hero/>
            break;
        case 2:
            renderingPart = <Exercise2Image/>
            break;
        case 3:
            renderingPart = <Exercise3Data/>
            break;
        default:
            renderingPart = "No state associated"
            break;
    }
    return (<div>{renderingPart}</div>)
}