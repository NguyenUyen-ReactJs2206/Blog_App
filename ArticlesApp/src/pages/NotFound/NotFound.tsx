import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='bg-gradient-to-r from-green to-lime-200 '>
      <div className='m-auto flex min-h-screen w-9/12 items-center justify-center py-16'>
        <div className='shadow overflow-hidden bg-white pb-8 sm:rounded-lg'>
          <div className='border-t border-gray-200 pt-8 text-center'>
            <h1 className='text-9xl font-bold text-green'>404</h1>
            <h1 className='py-8 text-6xl font-medium'>oops! Page not found</h1>
            <p className='px-12 pb-8 text-2xl font-medium'>
              Oops! The page you are looking htmlFor does not exist. It might have been moved or deleted.
            </p>
            <Link
              to='/'
              className='mr-6 rounded-md bg-gradient-to-r from-lime-200 to-green px-6 py-3 font-semibold text-white hover:from-pink-500 hover:to-orange-500'
            >
              GO HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
