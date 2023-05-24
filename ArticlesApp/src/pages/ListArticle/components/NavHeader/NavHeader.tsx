import classNames from 'classnames'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import path from 'src/constants/path'
import { AppContext } from 'src/contexts/app.context'

export default function NavHeader() {
  const { isAuthenticated } = useContext(AppContext)
  return (
    <div className='flex'>
      {!isAuthenticated ? (
        ''
      ) : (
        <NavLink
          to={path.feed}
          className={({ isActive }) =>
            classNames('border-b-1 px-4 py-2', {
              ' text-gray-400': !isActive,
              'border-b-2 border-b-green text-green': isActive
            })
          }
        >
          Your Feed
        </NavLink>
      )}
      <NavLink
        to={path.home}
        className={({ isActive }) =>
          classNames('border-b-1 px-4 py-2', {
            ' text-gray-400': !isActive,
            'border-b-2 border-b-green text-green': isActive
          })
        }
      >
        Global Feed
      </NavLink>
    </div>
  )
}
