import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import path from 'src/constants/path'

export default function RegisterHeader() {
  return (
    <header className='py-3'>
      <div className='container'>
        <div className=' sm:mx-8'>
          <nav className='flex justify-between'>
            <NavLink to={path.home} className=' text-2xl font-bold text-green'>
              conduit
            </NavLink>
            <div className='flex items-center'>
              <NavLink
                to={path.home}
                className={({ isActive }) =>
                  classNames('text-md px-3 hover:text-black', {
                    'text-gray-400': !isActive,
                    'text-black': isActive
                  })
                }
              >
                Home
              </NavLink>
              <NavLink
                to={path.login}
                className={({ isActive }) =>
                  classNames('text-md px-3 hover:text-black', {
                    'text-gray-400': !isActive,
                    'text-black': isActive
                  })
                }
              >
                Sign in
              </NavLink>
              <NavLink
                to={path.register}
                className={({ isActive }) =>
                  classNames('text-md px-3 hover:text-black', {
                    'text-gray-400': !isActive,
                    'text-black': isActive
                  })
                }
              >
                Sign up
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
