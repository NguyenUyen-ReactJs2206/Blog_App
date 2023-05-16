import Banner from 'src/components/Banner'

export default function ListArticle() {
  return (
    <div>
      <Banner />
      <div className='my-6'>
        <div className='container'>
          <div className='relative grid grid-cols-1 text-left md:mx-6 md:grid-cols-12'>
            <div className='md:col-span-9'>
              <div className=''>
                <div className='flex'>
                  <div className='border-b-2 border-b-green px-4 py-2'>Global Feed</div>
                </div>
              </div>
              <div className=''>
                <div className='border-t border-gray-200 py-3'>
                  <div className='flex justify-between py-3'>
                    <div className='flex justify-start'>
                      <div className='mr-2 h-11 w-11 flex-shrink-0 '>
                        <img
                          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClMXGbEi5cprRWAF_GvC5x_mTnf7TsGPUgw&usqp=CAU'
                          alt='avatar'
                          className='h-full w-full rounded-full bg-current object-cover'
                        />
                      </div>
                      <div className='tex-left'>
                        <div className='text-md text-green'>Anah Benesova</div>
                        <span className='block text-[12px] text-gray-400'> December 0, 2022</span>
                      </div>
                    </div>
                    <div className='justify-end'>
                      <div className='mr-4 flex cursor-pointer rounded-sm border border-green stroke-none px-2 py-1 text-center text-green hover:bg-green hover:text-white'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className=' mt-1 h-4 w-4 fill-green'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                          />
                        </svg>
                        <span>1234</span>
                      </div>
                    </div>
                  </div>
                  <h1 className='text-xl font-semibold text-gray-800'>
                    If we quantify the alarm, we can get to the FTP pixel through the online SSl interface!
                  </h1>
                  <p className='text-md font-light text-gray-400'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ullam accusamus, quia animi est vero
                    non pariatur sapiente molestias asperiores quisquam consectetur ipsum dolorem soluta facilis
                    reiciendis sequi perspiciatis eius?
                  </p>
                  <div className='flex justify-between py-4'>
                    <div className='flex-start cursor-pointer text-sm text-gray-400 hover:text-green'>
                      <span>Read more...</span>
                    </div>
                    <div className='flex-end flex'>
                      <div className='ml-1 cursor-pointer rounded-xl border border-gray-300 px-1 text-sm text-gray-400'>
                        rerum
                      </div>
                      <div className='ml-1 cursor-pointer rounded-xl border border-gray-300 px-1 text-sm text-gray-400'>
                        maria
                      </div>
                      <div className='ml-1 cursor-pointer rounded-xl border border-gray-300 px-1 text-sm text-gray-400'>
                        orio
                      </div>
                    </div>
                  </div>
                </div>
                <div className='border-t border-gray-200 py-3'>
                  <div className='flex justify-between py-3'>
                    <div className='flex justify-start'>
                      <div className='mr-2 h-11 w-11 flex-shrink-0 '>
                        <img
                          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClMXGbEi5cprRWAF_GvC5x_mTnf7TsGPUgw&usqp=CAU'
                          alt='avatar'
                          className='h-full w-full rounded-full bg-current object-cover'
                        />
                      </div>
                      <div className='tex-left'>
                        <div className='text-md text-green'>Anah Benesova</div>
                        <span className='block text-[12px] text-gray-400'> December 0, 2022</span>
                      </div>
                    </div>
                    <div className='justify-end'>
                      <div className='mr-4 flex cursor-pointer rounded-sm border border-green stroke-none px-2 py-1 text-center text-green hover:bg-green hover:text-white'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className=' mt-1 h-4 w-4 fill-green'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                          />
                        </svg>
                        <span>1234</span>
                      </div>
                    </div>
                  </div>
                  <h1 className='text-xl font-semibold text-gray-800'>
                    If we quantify the alarm, we can get to the FTP pixel through the online SSl interface!
                  </h1>
                  <p className='text-md font-light text-gray-400'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ullam accusamus, quia animi est vero
                    non pariatur sapiente molestias asperiores quisquam consectetur ipsum dolorem soluta facilis
                    reiciendis sequi perspiciatis eius?
                  </p>
                  <div className='flex justify-between py-4'>
                    <div className='flex-start cursor-pointer text-sm text-gray-400 hover:text-green'>
                      <span>Read more...</span>
                    </div>
                    <div className='flex-end flex'>
                      <div className='ml-1 cursor-pointer rounded-xl border border-gray-300 px-1 text-sm text-gray-400'>
                        rerum
                      </div>
                      <div className='ml-1 cursor-pointer rounded-xl border border-gray-300 px-1 text-sm text-gray-400'>
                        maria
                      </div>
                      <div className='ml-1 cursor-pointer rounded-xl border border-gray-300 px-1 text-sm text-gray-400'>
                        orio
                      </div>
                    </div>
                  </div>
                </div>
                <div className='border-t border-gray-200 py-3'>
                  <div className='flex justify-between py-3'>
                    <div className='flex justify-start'>
                      <div className='mr-2 h-11 w-11 flex-shrink-0 '>
                        <img
                          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClMXGbEi5cprRWAF_GvC5x_mTnf7TsGPUgw&usqp=CAU'
                          alt='avatar'
                          className='h-full w-full rounded-full bg-current object-cover'
                        />
                      </div>
                      <div className='tex-left'>
                        <div className='text-md text-green'>Anah Benesova</div>
                        <span className='block text-[12px] text-gray-400'> December 0, 2022</span>
                      </div>
                    </div>
                    <div className='justify-end'>
                      <div className='mr-4 flex cursor-pointer rounded-sm border border-green stroke-none px-2 py-1 text-center text-green hover:bg-green hover:text-white'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className=' mt-1 h-4 w-4 fill-green'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                          />
                        </svg>
                        <span>1234</span>
                      </div>
                    </div>
                  </div>
                  <h1 className='text-xl font-semibold text-gray-800'>
                    If we quantify the alarm, we can get to the FTP pixel through the online SSl interface!
                  </h1>
                  <p className='text-md font-light text-gray-400'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ullam accusamus, quia animi est vero
                    non pariatur sapiente molestias asperiores quisquam consectetur ipsum dolorem soluta facilis
                    reiciendis sequi perspiciatis eius?
                  </p>
                  <div className='flex justify-between py-4'>
                    <div className='flex-start cursor-pointer text-sm text-gray-400 hover:text-green'>
                      <span>Read more...</span>
                    </div>
                    <div className='flex-end flex'>
                      <div className='ml-1 cursor-pointer rounded-xl border border-gray-300 px-1 text-sm text-gray-400'>
                        rerum
                      </div>
                      <div className='ml-1 cursor-pointer rounded-xl border border-gray-300 px-1 text-sm text-gray-400'>
                        maria
                      </div>
                      <div className='ml-1 cursor-pointer rounded-xl border border-gray-300 px-1 text-sm text-gray-400'>
                        orio
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-3'>
              <div className='mx-4 rounded-md bg-gray-100 p-4'>
                <p>Popular Tags</p>
                <div className='flex flex-wrap'>
                  <div className='mt-1 cursor-pointer rounded-xl border bg-gray-400 px-2 text-[12px] text-white hover:bg-gray-600'>
                    implementation
                  </div>
                  <div className='mt-1 cursor-pointer rounded-xl border bg-gray-400 px-2 text-[12px] text-white hover:bg-gray-600'>
                    ftion
                  </div>
                  <div className='mt-1 cursor-pointer rounded-xl border bg-gray-400 px-2 text-[12px] text-white hover:bg-gray-600'>
                    aa
                  </div>
                  <div className='mt-1 cursor-pointer rounded-xl border bg-gray-400 px-2 text-[12px] text-white hover:bg-gray-600'>
                    implementation
                  </div>
                  <div className='mt-1 cursor-pointer rounded-xl border bg-gray-400 px-2 text-[12px] text-white hover:bg-gray-600'>
                    imentation
                  </div>
                  <div className='mt-1 cursor-pointer rounded-xl border bg-gray-400 px-2 text-[12px] text-white hover:bg-gray-600'>
                    imptation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
