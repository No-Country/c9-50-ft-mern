import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  meet: z.string().min(1, { message: 'Required' }).url({ message: 'Invalid URL' }),
  cafecito: z.string().min(0)
})

export const ColaboradorUrls = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  })
  const onSubmit = (data, e) => {
    e.target.reset()
    console.log(data)
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
              name='meet'
              {...register('meet')}
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
              name='cafecito'
              {...register('cafecito')}
            />
            {errors.cafecito?.message && (
              <p className='py-2 text-black text-xs font-semibold'>{errors.cafecito?.message}</p>
            )}
          </div>
          <div className='w-2/3 flex flex-row items-center justify-around'>
            <button
              className='bg-sky-500 text-white py-3 px-10'
              onClick={() => navigate('/colaborador')}
            >
              Omitir
            </button>
            <button className='bg-sky-500 text-white py-3 px-10' type='submit'>
              Continuar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
