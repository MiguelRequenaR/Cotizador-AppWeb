import { useState, createContext } from "react";
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan, formatearDinero } from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState("");
    const [resultado, setResultado] = useState(0);
    const [cargando, setCargando] = useState(false);

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

        //Por cada año hay que restar el 3%
        resultado -= ((diferencia * 3) * resultado) / 100;

        //Europeo 30%
        //Americano 15%
        //Asiatico 5%
        resultado *= calcularMarca(datos.marca);

        //Basico aumenta 20%
        //Completo 50%
        resultado *= obtenerPlan(datos.plan);

        //formatear dinero
        resultado = formatearDinero(resultado);
        
        setCargando(true);

        setTimeout(() => {
            setResultado(resultado);
            setCargando(false);
        }, 3000);

        setResultado(resultado);
    }

    return (
        <CotizadorContext.Provider 
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
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