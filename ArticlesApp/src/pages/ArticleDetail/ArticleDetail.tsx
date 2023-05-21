import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getArticleDetail } from 'src/apis/article.api'
import SkeletonArticleDetail from 'src/components/SkeletonArticleDetail'
import path from 'src/constants/path'
import { formatDate } from 'src/helpers/formatDate'
import { ArticleDetails } from 'src/types/article.type'

export default function ArticleDetail() {
  const [articleDetail, setArticleDetail] = useState<ArticleDetails>()
  const { nameId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    const controller = new AbortController()
    getArticleDetail(nameId as string, controller.signal)
      .then((res) => {
        const articleDetailResult = res.data
        console.log(articleDetailResult, 'aaaaaaaaaaaaa')
        setArticleDetail(articleDetailResult)

        dispatch({
          type: 'article/getArticleDetail',
          payload: articleDetailResult
        })
      })
      .catch((error) => {
        if (!(error.code === 'ERR_CANCELED')) {
          dispatch({
            type: 'article/getArticleDetailFailed',
            payload: error
          })
        }
      })
    return () => {
      controller.abort()
    }
  }, [nameId, dispatch])

  return (
    <>
      {!articleDetail && <SkeletonArticleDetail />}
      {articleDetail && (
        <div className='min-h-[100vh]'>
          <div className=' bg-grayblack py-8'>
            <div className='container'>
              <h1 className='mb-7 text-4xl font-bold text-white'>{articleDetail?.article.title}</h1>
              <div className='flex flex-wrap justify-start'>
                <div className='mr-6 flex flex-shrink-0'>
                  <div className='mr-2 h-10 w-10 flex-shrink-0 cursor-pointer'>
                    <img
                      src={articleDetail?.article.author.image}
                      alt='avatar'
                      className='h-full w-full rounded-full bg-current object-cover'
                    />
                  </div>
                  <div className='tex-left pr-2'>
                    <div className='text-md cursor-pointer font-light text-white hover:text-lime-600 hover:underline'>
                      {articleDetail?.article.author.username}
                    </div>
                    <span className='block text-[12px] text-gray-400'>
                      {formatDate(articleDetail?.article.createdAt)}
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
                  <span className='mt-1'>Follow {articleDetail?.article.author.username}</span>
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
                  <span className='mt-1'>Favorite Article {articleDetail?.article.favorited}</span>
                </button>
              </div>
            </div>
          </div>
          <div className='py-4'>
            <div className='container'>
              <div className='py-4 text-xl text-gray-600'>
                <p>{articleDetail?.article.body}</p>
              </div>
              <div className='my-5 flex flex-wrap justify-start'>
                {articleDetail?.article.tagList.map((tag, index) => (
                  <div
                    key={index}
                    className='mr-1 cursor-text rounded-xl border border-gray-300 px-2 py-1 text-[12px] text-gray-400'
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className='mt-10 items-center justify-center border-t border-t-gray-300 '>
                <div className='flex flex-wrap justify-center py-10'>
                  <div className='mr-6 flex flex-shrink-0'>
                    <div className='mr-2 h-10 w-10 flex-shrink-0 cursor-pointer'>
                      <img
                        src={articleDetail?.article.author.image}
                        alt='avatar'
                        className='h-full w-full rounded-full bg-current object-cover'
                      />
                    </div>
                    <div className='tex-left pr-2'>
                      <div className='text-md cursor-pointer font-light text-green hover:text-lime-600 hover:underline'>
                        {articleDetail?.article.author.username}
                      </div>
                      <span className='block text-[12px] text-gray-400'>
                        {formatDate(articleDetail?.article.createdAt)}
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
                    <span className='mt-1'>Follow {articleDetail?.article.author.username}</span>
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
                    <span className='mt-1'>Favorite Article {articleDetail?.article.favorited}</span>
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
      )}
    </>
  )
}
