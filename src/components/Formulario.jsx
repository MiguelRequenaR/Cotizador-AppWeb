import {MARCAS, YEARS, PLANES} from '../constants/index.js'
import { Fragment } from 'react'
import useCotizador from '../hooks/useCotizador.jsx';

const Formulario = () => {

    const { handleChangeDatos } = useCotizador();

    return (
        <>

            <form action="">
                <div className="my-5">
                    <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                        Marca
                    </label>
                    <select 
                        name="marca" 
                        id=""
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={e => handleChangeDatos(e)}
                    >
                        <option value="">--Selecionar Marca--</option>
                        {MARCAS.map(marca => (
                            <option 
                                key={marca.id} 
                                value={marca.id}
                            >
                                {marca.nombre} 
                            </option>
                        ))}
                    </select>
                </div>
                <div className="my-5">
                    <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                        Año
                    </label>
                    <select 
                        name="year" 
                        id=""
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={e => handleChangeDatos(e)}
                    >
                        <option value="">--Seleccionar el Año--</option>
                        {YEARS.map(year => (
                            <option 
                                key={year} 
                                value={year}
                            >
                                {year} 
                            </option>
                        ))}
                    </select>
                </div>
                <div className="my-5">
                    <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                        Elige un Plan
                    </label>
                    <div className='flex gap-3 itmes-center'>
                        {PLANES.map(plan => (
                            <Fragment key={plan.id}>
                                <input 
                                    type="radio" 
                                    name="plan" 
                                    value={plan.id}
                                    onChange={e => handleChangeDatos(e)}
                                />
                                <label htmlFor="">{plan.nombre}</label>
                            </Fragment>
                        ))}
                    </div>
                </div>
                <input 
                    type="submit" 
                    className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold' 
                    value='Cotizar'
                />
            </form>
        </>
    )
}

export default Formulario