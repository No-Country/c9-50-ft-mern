import nosotros from '../shared/img/imagen_nosotros.png'
export const HeroNosotros = () => {
  return (
    <>
      <div className='flex max-w-full justify-center'>
        <div className='flex flex-col lg:flex-row  w-5/6 items-center justify-between gap-20 p-5 '>
          <div className='md:w-3/6'>
            <img src={nosotros} alt='' />
          </div>
          <div className='md:w-3/6 flex justify-center 2xl:ml-24'>
            <div className='flex flex-col gap-3 items-center md:items-start p-8'>
              <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Nosotros
              </h1>
              <p className='tracking-widest'>
                MettApp permite un rápido encuentro entre los usuarios que necesiten de ayuda
                piscologica, pero que aún no han podido dar con ella. Debido a una existencia de
                sobredemanda de pacientes para un encuentro psicológico, es que hemos creado este
                espacio para que exista la interacción entre un consultante y un profesional a
                través de nuestra plataforma de fácil uso.
              </p>
              <h2 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Nuestra Misión
              </h2>
              <p className='tracking-widest'>
                Somos un grupo de jovenes de distintos países de latinamerica, que hemos
                desarrollado este espacio web para que existan cada vez menos la dificultad de poder
                encontrar ayuda cuando se es necesaria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
