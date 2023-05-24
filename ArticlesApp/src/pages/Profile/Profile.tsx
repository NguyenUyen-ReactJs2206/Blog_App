import { Link } from 'react-router-dom'
import path from 'src/constants/path'

export default function Profile() {
  return (
    <div className='min-h-[90vh]'>
      <div className='bg-graybg py-2'>
        <div className='container'>
          <div className='grid grid-cols-12'>
            <div className='col-span-12 items-center justify-center text-center sm:col-span-10 sm:col-start-2'>
              <div className='my-6 flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center p-2'>
                  <div className='h-24 w-24 flex-shrink-0  items-center justify-center text-center'>
                    <img
                      src='https://nhanvietluanvan.com/wp-content/uploads/2023/05/568603cbd1860c67bf8f6776cbe7f885.jpg'
                      alt='avatar'
                      className='h-full w-full rounded-full bg-current object-cover'
                    />
                  </div>
                  <div className='mt-2 text-xl font-bold capitalize'>Name</div>
                  <div className='text-md mt-2 text-gray-400'>Biooooooo</div>
                </div>
                <div className='mt-4 flex justify-end text-gray-500'>
                  <Link
                    to={path.settings}
                    type='button'
                    className='flex flex-shrink-0 rounded-md border border-gray-400 px-4 py-1 text-sm text-gray-400 hover:bg-gray-300 hover:text-gray-500'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-5 w-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'
                      />
                      <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                    </svg>
                    Edit Profile Settings
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
