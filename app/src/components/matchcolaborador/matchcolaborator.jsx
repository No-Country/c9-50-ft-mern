export const Matchcolaborator = () => {
  return (
    <>
      <div className='py-20 bg-gray-50'>
        {/* Seleccion de profesional */}
        <form action='' className='w-3/4 m-auto mb-8'>
          <div className='w-full'>
            <div className='mb-6'>
              <label htmlFor='' className='w-full text-start text-3xl'>
                ¿Quien estas buscando?
              </label>
            </div>
            <select
              defaultValue={'selected'}
              className='w-full bg-neutral-300 rounded-2xl h-20 px-4 text-lg'
              name=''
              id=''
            >
              <option value='selected' disabled>
                Elige a tu colaborador
              </option>
              <option value=''>Psicologo</option>
              <option value=''>Abogado</option>
            </select>
          </div>
        </form>
        {/* Resultados */}
        <div className='w-3/4 m-auto mb-16'>
          <p className='text-xl font-normal'>1 Resultados Encontrados</p>
        </div>
        {/* Primer Card */}
        <div className='flex flex-col justify-center items-center w-3/4 h-auto p-5 sm:py-2 sm:px-8 m-auto bg-neutral-300 mb-8 space-y-10 sm:flex-row sm:justify-between md:flex-row md:justify-between'>
          <div className='flex flex-col sm:flex-row md:flex-row md:items-center space-y-5 sm:space-y-0 items-center space-x-6'>
            <div className='flex flex-row justify-center items-center rounded-full w-20 h-20 bg-black overflow-hidden'>
              <img
                className='w-full'
                src='https://previews.123rf.com/images/seventyfour74/seventyfour741708/seventyfour74170800167/83829695-retrato-de-hermosa-mujer-psic%C3%B3loga-con-gafas-posando-con-portapapeles-en-la-oficina-de-terapia-c%C3%B3mod.jpg'
                alt=''
              />
            </div>
            <div className='flex flex-col items-start'>
              <h2 className='font-semibold text-xl'>Marcela Rodriguez I</h2>
              <p>Profesion</p>
            </div>
          </div>
          <div className='h-16 w-40 my-auto'>
            <button className='w-full h-4/5 bg-sky-500 text-white hover:bg-sky-600 transition-all -mt-4'>
              INICIAR CHAT
            </button>
          </div>
        </div>
        {/* Segunda card */}
        <div className='flex flex-col justify-center items-center w-3/4 h-auto p-4 sm:py-2 sm:px-8 m-auto bg-neutral-300 mb-8 space-y-10 sm:flex-row sm:justify-between md:flex-row md:justify-between'>
          <div className='flex flex-col sm:flex-row md:flex-row md:items-center space-y-5 sm:space-y-0 items-center space-x-6'>
            <div className='flex flex-row justify-center items-center rounded-full w-20 h-20 bg-black overflow-hidden'>
              <img
                className='w-full'
                src='https://previews.123rf.com/images/seventyfour74/seventyfour741708/seventyfour74170800167/83829695-retrato-de-hermosa-mujer-psic%C3%B3loga-con-gafas-posando-con-portapapeles-en-la-oficina-de-terapia-c%C3%B3mod.jpg'
                alt=''
              />
            </div>
            <div className='flex flex-col items-start'>
              <h2 className='font-semibold text-xl'>Marcela Rodriguez II</h2>
              <p>Profesion</p>
            </div>
          </div>
          <div className='h-16 w-40 my-auto'>
            <button className='w-full h-4/5 bg-sky-500 text-white hover:bg-sky-600 transition-all -mt-4'>
              INICIAR CHAT
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
