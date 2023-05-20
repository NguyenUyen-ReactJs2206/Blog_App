import { Link } from 'react-router-dom'
import path from 'src/constants/path'

export default function ArticleDetail() {
  return (
    <div className='min-h-[100vh]'>
      <div className=' bg-grayblack py-8'>
        <div className='container'>
          <h1 className='mb-7 text-4xl font-bold text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dolo
          </h1>
          <div className='flex flex-wrap justify-start'>
            <div className='mr-6 flex flex-shrink-0'>
              <div className='mr-2 h-10 w-10 flex-shrink-0 '>
                <img
                  src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fsea.ign.com%2Favatar-generations&psig=AOvVaw3KtPxoE4q_T3EaESjcAdDI&ust=1684604635711000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJiE0rj3gf8CFQAAAAAdAAAAABAJ'
                  alt='avatar'
                  className='h-full w-full rounded-full bg-current object-cover'
                />
              </div>
              <div className='tex-left pr-2'>
                <div className='text-md font-light text-white'>Blahpodskhf</div>
                <span className='block text-[12px] text-gray-400'>
                  {/* {formatDate(article.createdAt)} */}
                  bbbbbbbbbb
                </span>
              </div>
            </div>
            <button className='mr-1 mt-1 flex h-[30px] flex-shrink-0 rounded-md border border-gray-300 bg-grayblack px-2 text-center text-sm text-gray-400 transition hover:bg-gray-300 hover:text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={3}
                stroke='currentColor'
                className='mr-1 mt-[5px] h-4 w-4'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
              </svg>
              <span className='mt-1'>Follow Anah Benesova</span>
            </button>
            <button className='mr-1 mt-1 flex h-[30px] flex-shrink-0 rounded-md border border-green bg-grayblack px-2 text-center text-sm text-green transition hover:bg-green hover:text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='mr-1 mt-[5px] h-4 w-4 fill-green'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                />
              </svg>
              <span className='mt-1'>Favorite Article (123456)</span>
            </button>
          </div>
        </div>
      </div>
      <div className='py-4'>
        <div className='container'>
          <div className='py-4 text-xl text-gray-600'>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quidem facere reprehenderit voluptates
              distinctio ea libero porro mollitia blanditiis debitis inventore, saepe sapiente. Omnis distinctio
              sapiente, magnam illum repellendus tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              temporibus natus possimus cupiditate, culpa saepe at autem laudantium? Commodi dolor veritatis odio veniam
              doloremque, libero inventore nesciunt officia esse obcaecati! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Voluptate quidem facere reprehenderit voluptates distinctio ea libero porro mollitia
              blanditiis debitis inventore, saepe sapiente. Omnis distinctio sapiente, magnam illum repellendus tempora?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus natus possimus cupiditate, culpa
              saepe at autem laudantium? Commodi dolor veritatis odio veniam doloremque, libero inventore nesciunt
              officia esse obcaecati!
            </p>
          </div>
          <div className='my-5 flex flex-wrap justify-start'>
            <div className='mr-1 cursor-text rounded-xl border border-gray-300 px-2 py-1 text-[12px] text-gray-400'>
              aaaa
            </div>
            <div className='mr-1 cursor-text rounded-xl border border-gray-300 px-2 py-1 text-[12px] text-gray-400'>
              aaaaaaaaa
            </div>
            <div className='mr-1 cursor-text rounded-xl border border-gray-300 px-2 py-1 text-[12px] text-gray-400'>
              aaaaaaaaaa
            </div>
            <div className='mr-1 cursor-text rounded-xl border border-gray-300 px-2 py-1 text-[12px] text-gray-400'>
              aaaaaaaaaa
            </div>
          </div>
          <div className='mt-10 items-center justify-center border-t border-t-gray-300 '>
            <div className='flex flex-wrap justify-center py-10'>
              <div className='mr-6 flex flex-shrink-0'>
                <div className='mr-2 h-10 w-10 flex-shrink-0 cursor-pointer'>
                  <img
                    src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fsea.ign.com%2Favatar-generations&psig=AOvVaw3KtPxoE4q_T3EaESjcAdDI&ust=1684604635711000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJiE0rj3gf8CFQAAAAAdAAAAABAJ'
                    alt='avatar'
                    className='h-full w-full rounded-full bg-current object-cover'
                  />
                </div>
                <div className='tex-left pr-2'>
                  <div className='text-md cursor-pointer font-light text-green'>Blahpodskhf</div>
                  <span className='block text-[12px] text-gray-400'>
                    {/* {formatDate(article.createdAt)} */}
                    bbbbbbbbbb
                  </span>
                </div>
              </div>
              <button className='mr-1 mt-1 flex h-[30px] flex-shrink-0 rounded-md border border-gray-300 bg-white px-2 text-center text-sm text-gray-400 transition hover:bg-gray-300 hover:text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={3}
                  stroke='currentColor'
                  className='mr-1 mt-[5px] h-4 w-4'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                </svg>
                <span className='mt-1'>Follow Anah Benesova</span>
              </button>
              <button className='mr-1 mt-1 flex h-[30px] flex-shrink-0 rounded-md border border-green bg-white px-2 text-center text-sm text-green transition hover:bg-green hover:text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='mr-1 mt-[5px] h-4 w-4 fill-green'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                  />
                </svg>
                <span className='mt-1'>Favorite Article (123456)</span>
              </button>
            </div>
            <div className='grid py-5 md:grid-cols-12'>
              <div className='md:col-span-8 md:col-start-3'>
                <p className='justify-center text-start'>
                  <Link to={path.login} className='text-green hover:text-lime-600 hover:underline'>
                    Sign in
                  </Link>{' '}
                  or{' '}
                  <Link to={path.register} className='text-green hover:text-lime-600 hover:underline'>
                    sign up
                  </Link>{' '}
                  to add comments on this article.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
