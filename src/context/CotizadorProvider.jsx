import { useState, createContext } from "react";
import { obtenerDiferenciaYear } from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState("");

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }

    const cotizarSeguro = () => {
        //Una base
        let resultado = 2000;
        
        //Obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year);
    }

    return (
        <CotizadorContext.Provider 
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro
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