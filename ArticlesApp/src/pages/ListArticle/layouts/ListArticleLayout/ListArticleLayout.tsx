import { useContext } from 'react'
import { NavLink, createSearchParams } from 'react-router-dom'
import Banner from 'src/components/Banner'
import path from 'src/constants/path'
import { AppContext } from 'src/contexts/app.context'
import TagList from '../../components/TagList'
import classNames from 'classnames'
import GlobalFeed from '../../components/GlobalFeed'

interface Props {
  children?: React.ReactNode
}
export default function ListArticleLayout({ children }: Props) {
  const { isAuthenticated } = useContext(AppContext)

  return (
    <div>
      {!isAuthenticated && <Banner />}
      <div className='my-6 min-h-[90vh]'>
        <div className='container'>
          <div className='relative grid grid-cols-1 text-left md:mx-6 md:grid-cols-12'>
            {!isAuthenticated && (
              <div className='md:col-span-9'>
                <div className='border-b border-b-gray-300 '>
                  <div className=' flex'>
                    <NavLink
                      to={{
                        pathname: path.home,
                        search: createSearchParams({
                          limit: '10',
                          offset: '0'
                        }).toString()
                      }}
                      className='border-b-2 border-b-green px-4 py-2 text-green '
                    >
                      Global Feed
                    </NavLink>
                  </div>
                </div>
                <GlobalFeed />
              </div>
            )}
            {isAuthenticated && (
              <div className='md:col-span-9'>
                <div className='border-b border-b-gray-300 '>
                  <div className=' flex'>
                    <NavLink
                      to={path.yourFeed}
                      className={({ isActive }) =>
                        classNames('text-md mb-3 mr-4 flex px-6 hover:text-black/80 sm:mb-0', {
                          'text-gray-400': !isActive,
                          'border-b-2 border-b-green text-green': isActive
                        })
                      }
                    >
                      Your Feed
                    </NavLink>
                    <NavLink
                      to={{
                        pathname: path.home,
                        search: createSearchParams({
                          limit: '10',
                          offset: '0'
                        }).toString()
                      }}
                      className={({ isActive }) =>
                        classNames('text-md mb-3 mr-4 flex px-6 hover:text-black/80 sm:mb-0', {
                          'text-gray-400': !isActive,
                          'border-b-2 border-b-green text-green': isActive
                        })
                      }
                    >
                      Global Feed
                    </NavLink>
                  </div>
                </div>
                {children}
              </div>
            )}

            <div className='md:col-span-3'>
              <TagList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
