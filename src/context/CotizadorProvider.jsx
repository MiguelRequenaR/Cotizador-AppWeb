import { useState, createContext } from "react";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

    const handleChangeDatos = e => {
        console.log(e.target.name);
        console.log(e.target.value);
    }

    return (
        <CotizadorContext.Provider 
            value={{
                handleChangeDatos
            }}
        >
            {children}
        </CotizadorContext.Provider>
    );
}

export {
    CotizadorProvider
}
export default CotizadorContext;