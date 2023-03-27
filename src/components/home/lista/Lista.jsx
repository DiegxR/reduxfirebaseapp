import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDocAsync } from '../../../redux/actions/financesActions'
import './stylesLista.scss'

const Lista = () => {
    const { finances } = useSelector(store => store.finances)
    const dispatch = useDispatch()
    const [balance, setBalance] = useState(0)
    const [ingresos, setIngresos] = useState(0)
    const [egresos, setEgresos] = useState(0)
    useEffect(() => {
        dispatch(getDocAsync())
    }, [])
    useEffect(()=>{
        let valueBalance = 0;
        let valueIngresos = 0;
        let valueEgresos = 0
        finances.forEach(element => {
            if(element.type === 'retiro'){
                valueEgresos += Number(element.price)
            }else if(element.type === 'deposito'){
                valueIngresos += Number(element.price)
            }
        });
        valueBalance = valueIngresos - valueEgresos;
        setBalance(valueBalance);
        setEgresos(valueEgresos);
        setIngresos(valueIngresos);
    },[finances])
    return (
        <section className=' flex flex-col p-4 items-center'>
            <h1 className='text-3xl flex mb-10 font-bold items-end'>  <img
                className="h-16 w-16 mr-3"
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDRlOTE5OTYxNTQ4NzNkN2MzY2ZmODNhZGIzZGMxNmQ0MDYyNWRiZCZjdD1z/ePc1IPFswJbjNYkgkF/giphy.gif"
                alt=""
            />
                Lista de Movimientos
            </h1>
            <section className='flex gap-5 w-1/2 mb-12'>
            <div className='border-2 w-1/3 h-12 flex items-center justify-center gap-2'> <span className='font-bold'>Ingresos:  </span> {ingresos}</div>
            <div className='border-2 w-1/3 h-12 flex items-center justify-center gap-2'> <span className='font-bold'>Egresos: </span>  {egresos}</div>
            <div className='border-2 w-1/3 h-12 flex items-center justify-center gap-2'><span className='font-bold'> Balance:  </span> {balance}</div>
            </section>
            <table className='table-auto formphone h-40vh bg-red-200  text-center  p-2 rounded '>
                <thead className=''>
                    <tr>
                        <th>Fecha</th>
                        <th>Tipo</th>
                        <th>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {finances.length ?
                        finances.map((item) => (
                            <tr>
                                <td>{item.date}</td>
                                <td>{item.type}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))
                        : <></>}
                </tbody>

            </table>
        </section>
    )
}

export default Lista