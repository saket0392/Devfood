import React, { useContext, useReducer } from "react";

const Cartstatecontext = useContext();
const Cartdispatchcontext = useContext();

const reducer = (state,action) => {
    switch (action.type) {
        case "ADD":
            return[...state,{}]
        default:
            console.log("error in reducer");
            break;
    }
}

export const cartprovider = ({children}) =>{
    const [state,dispatch] = useReducer()
    return(
        <Cartdispatchcontext.Provider value = {dispatch}>
            <Cartstatecontext.Provider value = {state}>
                {children}
            </Cartstatecontext.Provider>
        </Cartdispatchcontext.Provider>
    )
}

export const usecart = () => useContext(Cartstatecontext);
export const usedispatch = () => useContext(Cartdispatchcontext);