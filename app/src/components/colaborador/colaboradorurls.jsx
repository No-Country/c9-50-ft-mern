import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useDispatch, useSelector } from 'react-redux'
import { startUpdateRegister } from '../../redux/auth/thunks'

const schema = z.object({
  mettUrl: z.string().min(1, { message: 'Required' }).url({ message: 'Invalid URL' }),
  refered: z.string().optional()
})

export const ColaboradorUrls = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  })

  const { token, role } = useSelector((state) => state.auth)

  const onSubmit = (data, e) => {
    dispatch(startUpdateRegister({ tipo: role, mettUrl: data.mettUrl, refered: data.refered }, token))
    e.target.reset()
    navigate('/colaborador')
  }
  return (
    <>
      <div className='w-full h-screen flex flex-col items-center justify-center'>
        <form
          action=''
          method=''
          className='flex flex-col items-center w-full h-5/6'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='w-1/2 flex flex-col items-start gap-4 mb-20'>
            <label htmlFor=''>
              Tu meet URL<sup>*</sup>
            </label>
            <input
              type='text'
              className='w-full bg-neutral-200 px-4 py-3 rounded-md outline-none'
              name='mettUrl'
              {...register('mettUrl')}
            />
            {errors.meet?.message && (
              <p className='py-2 text-black text-xs font-semibold'>{errors.meet?.message}</p>
            )}
          </div>
          <div className='w-1/2 flex flex-col items-start gap-4 mb-32'>
            <label htmlFor=''>Tu Cafecito URL</label>
            <input
              type='text'
              className='w-full bg-neutral-200 px-4 py-3 rounded-md outline-none'
              name='refered'
              {...register('refered')}
            />
            {errors.cafecito?.message && (
              <p className='py-2 text-black text-xs font-semibold'>{errors.cafecito?.message}</p>
            )}
          </div>
          <div className='w-2/3 flex flex-col space-y-5 sm:space-y-0 sm:flex-row items-center sm:justify-around'>
            <button
              className='bg-sky-500 text-white w-52 h-10 sm:w-auto sm:h-auto sm:py-3 sm:px-10'
              onClick={() => navigate('/colaborador')}
            >
              Omitir
            </button>
            <button
              type='submit'
              className='bg-sky-500 text-white w-52 h-10 sm:w-auto sm:h-auto sm:py-3 sm:px-10'
            >
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
