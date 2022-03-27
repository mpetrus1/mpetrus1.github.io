import { Hero } from "../components/Hero";
import AirportImage from "../components/AirportImage";
import Temps from "../components/Temps";
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
            renderingPart = <AirportImage/>
            break;
        case 3:
            renderingPart = <Temps/>
            break;
        default:
            renderingPart = "No state associated"
            break;
    }
    return (<div>{renderingPart}</div>)
}