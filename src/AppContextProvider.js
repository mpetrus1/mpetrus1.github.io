import React, {useReducer, createContext} from "react";
const AppContext = createContext();
const initialState ={
    option:1,
    data:[]
}

const ACTIONS ={
    SET_MENU_OPTION:"setMenuOption",
    LOAD_TEMPS:"loadTemps"
}

const reducer = (state, action)=>{
    switch (action.type){
        case ACTIONS.SET_MENU_OPTION:
            return {option: action.payload}
        case ACTIONS.LOAD_TEMPS:
            return state;
        default:
            return state;
    }
}

const AppProvider = ({children}) => {
    const [appState, dispatch] = useReducer(reducer,initialState);


    const appActions = {
        setOption1: () => {
            dispatch({type: ACTIONS.SET_MENU_OPTION, payload:1})
            console.log("option 1")
        },
        setOption2: () => {
            dispatch({type: ACTIONS.SET_MENU_OPTION, payload:2})
            console.log("option 2")
        },
        setOption3: () => {
            dispatch({type: ACTIONS.SET_MENU_OPTION, payload:3})
            console.log("option 3")
        },

    }

    return (
        <AppContext.Provider value={{
            appState: appState,
            appActions: appActions,
        }}>
            {children}
        </AppContext.Provider>
        
    );
};

export {AppProvider, AppContext};