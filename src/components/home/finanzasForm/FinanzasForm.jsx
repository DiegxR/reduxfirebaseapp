import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { saveMovementAsync } from '../../../redux/actions/financesActions'
import { fileUpload } from '../../../services/service'

const FinanzasForm = () => {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const dispatch = useDispatch()
    const {loading, error} = useSelector(store => store.finances)
    const onSubmit = async(data) => {
        const photo = data.file.length ? await fileUpload(data.file[0]) : ''
        dispatch(saveMovementAsync({
            price: data.price,
            type: data.type,
            date: data.date,
            photo: photo,
            description: data.description,
        }))
    }
    /**ANDRES DEJA DE QUITAR LA FRESAAAAAAAAAAAAAAAAAAAAAAA */
    /**Wili estuvo aquí */

  return (
    <section className='p-6'>
    
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-8 gap-8 bg-neutral-100 formphone'>
        <h1 className='flex self-center  items-end'>Registrar Movimientos   <img
                        className="h-14 w-14 ml-6"
                        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDRlOTE5OTYxNTQ4NzNkN2MzY2ZmODNhZGIzZGMxNmQ0MDYyNWRiZCZjdD1z/ePc1IPFswJbjNYkgkF/giphy.gif"
                        alt="perritu"
                    /></h1>
            <label className='flex flex-col'>
                Monto
                <input {...register('price',
                 {required: 'Este campo es requerido'})} type="text" placeholder="Monto" className='outline-0 h-10' />
            </label>
            {errors.price ? <span className='text-red-500'>{errors.price.message}</span> : <></>}

            <label className='flex flex-col'>
                <span className='font-bold'>
                    Tipo de movimiento
                </span>
            
                <select className='outline-0 h-10 flex items-center' {...register('type', {
                    required: 'Este campo es requerido'
                })}>
                    <option value="">Selecione un tipo</option>
                    <option value="deposito">Deposito</option>
                    <option value="retiro">Retiro</option>
                </select>
            </label>
            {errors.type ? <span className='text-red-500'>{errors.type.message}</span> : <></>}

            
            
            <label className='flex flex-col'>
                <span>Fecha</span>
                <input className='outline-0 h-10' type="date" {...register('date', {required: 'Este campo es requerido'})}/>
            </label>
            {errors.date? <span className='text-red-500'>{errors.date.message}</span> : <></>}
            <label className='flex flex-col'>
                <span className="mb-2">Comprobante</span>
                <input {...register('file', {required: 'Este campo es requerido'})} type="file" className="file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-indigo-400
              hover:file:bg-violet-100 outline-0" />
            </label>
            {errors.file? <span className='text-red-500'>{errors.file.message}</span> : <></>}
            <label className='flex flex-col'>
                <span>Descripción del movimiento</span>
                <textarea className='outline-none shadow-md shadow-red-300/50 p-[1em] text-xl' {...register('description', {required: 'Este campo es requerido'})} rows="5"/>
            </label>
            {errors.description? <span className='text-red-500'>{errors.description.message}</span> : <></>}
            <button disabled={loading} className={`formphone text-white cursor-pointer bg-red-500 rounded-md p-[1em] hover:bg-red-300 transition duration-150 ease-out ${loading ? `opacity-60` : ''}`} type='submit'>{!loading ? 'Registrar' : '⭕'}</button>
            
            {error.status ? <span>{error.message}</span> : <></>}

            <Link to='/list' className='text-blue-500'>Ver todos los movimientos</Link>
        </form>
    </section>
  )
}

export default FinanzasForm