import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import punto from '../shared/img/Punto.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../redux/auth/thunks'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
const navigation = [
  { name: 'Nosotros', href: '/nosotros', current: false },
  { name: 'Contacto', href: '/contacto', current: false },
  { name: 'Chat', href: '/chat', current: false },
  { name: 'Turnos', href: '/calendar', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
  const { status, name, role, token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(startLogout(token))
    navigate('/')
  }
  return (
    <Disclosure as='nav' className='F2F1EF'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open
                    ? (
                      <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                      )
                    : (
                      <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                      )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <img className='hidden h-4 w-auto sm:block' src={punto} alt='mettapp' />
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex items-center space-x-4'>
                    <Link to='/'>MeetApp</Link>
                    <div className='inset-28'>
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-black hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center m-auto sm:static sm:inset-auto sm:ml-6 sm:pr-0 bg-primary hover:bg-primaryHover h-8 shadow-md'>
                {status === 'authenticated'
                  ? (
                    <Menu as='div' className='relative ml-3'>
                      <div>
                        <Menu.Button className='inline-flex w-full justify-center rounded-md bg-transparent bg-opacity-20 px-3 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                          <p className='w-auto h-auto text-xs text-white p-3 ml-1'>{name}</p>
                          <ChevronDownIcon
                            className='ml-2 mt-3 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100'
                            aria-hidden='true' />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items className='absolute right-0 z-10 mt-0 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to='/profile'
                                className={classNames(
                                  active ? 'bg-gray-100 border-r-4 border-primary' : '',
                                  'block px-4 py-2 text-sm text-gray-700 border-r-2 border-primary'
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to='/changePassword'
                                className={classNames(
                                  active ? 'bg-gray-100 border-r-4 border-primary' : '',
                                  'block px-4 py-2 text-sm text-gray-700 border-r-2 border-primary'
                                )}
                              >
                                Change Password
                              </Link>
                            )}
                          </Menu.Item>
                          {role === 'COLABORATOR' && (
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to='/tusurls'
                                  className={classNames(
                                    active ? 'bg-gray-100 border-r-4 border-primary' : '',
                                    'block px-4 py-2 text-sm text-gray-700 border-r-2 border-primary'
                                  )}
                                >
                                  Settings
                                </Link>
                              )}
                            </Menu.Item>
                          )}
                          {role === 'PATIENT' && (
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to='/eligetucolaborador'
                                  className={classNames(
                                    active ? 'bg-gray-100 border-r-4 border-primary' : '',
                                    'block px-4 py-2 text-sm text-gray-700 border-r-2 border-primary'
                                  )}
                                >
                                  Elegir Colaborador
                                </Link>
                              )}
                            </Menu.Item>
                          )}
                          {role === 'COLABORATOR' && (
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to='/colaborador'
                                  className={classNames(
                                    active ? 'bg-gray-100 border-r-4 border-primary' : '',
                                    'block px-4 py-2 text-sm text-gray-700 border-r-2 border-primary'
                                  )}
                                >
                                  Mis Pacientes
                                </Link>
                              )}
                            </Menu.Item>
                          )}
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href='#'
                                className={classNames(
                                  active ? 'bg-gray-100 border-r-4 border-primary' : '',
                                  'block px-4 py-2 text-sm text-gray-700 border-r-2 border-primary'
                                )}
                                onClick={logout}
                              >
                                Sign out
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    )
                  : (
                    <Link className='w-auto h-auto text-xs text-white p-4 ml-3' to='/login'>
                      Inicio Sesión
                    </Link>
                    )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
