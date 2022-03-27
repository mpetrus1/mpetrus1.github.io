import React, {useContext, useState} from "react";
import {AppContext} from "../AppContextProvider";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { appState, appActions} = React.useContext(AppContext)
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-500 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
                    WebApp for React greatest course
                </a>
                <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                    <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                    <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                    <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                </button>
                </div>
                <div className={(menuOpen ? "flex flex-grow items-center" : "hidden")+" lg:block"}>
                    <ul className={(menuOpen ?"flex flex-col list-none":"inline-flex")} >
                        <li className="nav-item"><a className="px-4 hover:text-blue-800 px-4 font-bold" href="/">Home</a></li>
                        
                        <li className="nav-item">
                            <a className="px-4 hover:text-blue-800" href="#" onClick={()=>appActions.setOption2()}>Datos Aeropuerto</a>
                        </li>
                        <li className="nav-item">
                            <a className="px-4 hover:text-blue-800" href="#" onClick={()=>appActions.setOption3()}>Temperatura</a>
                        </li>
                    </ul>
                </div>
            </div> 
        </nav>
    )
}

