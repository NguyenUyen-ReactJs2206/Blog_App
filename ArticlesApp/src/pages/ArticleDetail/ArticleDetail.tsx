import { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import SkeletonArticleDetail from 'src/components/SkeletonArticleDetail'
import path from 'src/constants/path'
import { AppContext } from 'src/contexts/app.context'
import { formatDate } from 'src/helpers/formatDate'
import { RootState, useAppDispatch } from 'src/store'
import {
  deleteFavoriteArticleThunk,
  getArticleDetailThunk,
  postFavoritedArticleThunk,
  resetStateDetail
} from 'src/useslice/articles.slice'

export default function ArticleDetail() {
  const articleDetail = useSelector((state: RootState) => state.articlesReducer.articleDetail)
  const articleList = useSelector((state: RootState) => state.articlesReducer.articleList)

  const articleDetailShow = articleList.articles.find((article) => article.slug === articleDetail?.article.slug)

  const { profile, isAuthenticated } = useContext(AppContext)
  const { nameId } = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(resetStateDetail())
    const promise = dispatch(getArticleDetailThunk(nameId as string))

    return () => {
      promise.abort()
    }
  }, [nameId, dispatch])

  const handleAddFavorite = (nameId: string) => {
    const promise = dispatch(postFavoritedArticleThunk(nameId))

    return () => {
      promise.abort()
    }
  }

  const handleRemoveFavorite = (nameId: string) => {
    const promise = dispatch(deleteFavoriteArticleThunk(nameId))

    return () => {
      promise.abort()
    }
  }

  return (
    <>
      {!articleDetailShow && <SkeletonArticleDetail />}
      {articleDetailShow && (
        <div className='min-h-[100vh]'>
          <div className=' bg-grayblack py-8'>
            <div className='container px-2 sm:px-10 md:px-16'>
              <h1 className='mb-7 text-4xl font-bold text-white'>{articleDetailShow?.title}</h1>
              <div className='flex flex-wrap justify-start'>
                <div className='mr-6 flex flex-shrink-0'>
                  <div className='mr-2 h-10 w-10 flex-shrink-0 cursor-pointer'>
                    <img
                      src={articleDetailShow?.author.image}
                      alt='avatar'
                      className='h-full w-full rounded-full bg-current object-cover'
                    />
                  </div>
                  <div className='tex-left pr-2'>
                    <div className='text-md cursor-pointer font-light text-white hover:text-lime-600 hover:underline'>
                      {articleDetailShow?.author.username}
                    </div>
                    <span className='block text-[12px] text-gray-400'>{formatDate(articleDetailShow?.createdAt)}</span>
                  </div>
                </div>
                {articleDetailShow.author.username === profile?.username && (
                  <>
                    <button className='mr-1 mt-1 flex h-[30px] flex-shrink-0 rounded-md border border-gray-300 bg-grayblack px-2 pt-1 text-center text-sm text-gray-400 transition hover:bg-gray-300 hover:text-white'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='mr-1 h-4 w-4 '
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
                        />
                      </svg>
                      Edit Article
                    </button>
                    <button className='mr-1 mt-1 flex h-[30px] flex-shrink-0 rounded-md border border-red-400/50 bg-grayblack px-2 pt-1 text-center text-sm text-red-400/50 transition hover:bg-red-400/50 hover:text-white'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='mr-1 h-4 w-4'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                        />
                      </svg>
                      Delete Article
                    </button>
                  </>
                )}
                {articleDetailShow.author.username !== profile?.username && (
                  <>
                    <button className='mr-1 mt-1 flex h-[30px] flex-shrink-0 rounded-md border border-gray-300 bg-grayblack px-2 pt-1 text-center text-sm text-gray-400 transition hover:bg-gray-300 hover:text-white'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={3}
                        stroke='currentColor'
                        className='mr-1  h-4 w-4'
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                      </svg>
                      Follow ({articleDetailShow?.author.username})
                    </button>
                    <button
                      onClick={() => {
                        !articleDetailShow?.favorited
                          ? handleAddFavorite(articleDetailShow.slug)
                          : handleRemoveFavorite(articleDetailShow.slug)
                      }}
                      className={
                        articleDetailShow?.favorited === false
                          ? 'mr-1 mt-1 flex h-[30px] flex-shrink-0 rounded-md border border-green bg-grayblack px-2 pt-1 text-center text-sm text-green transition hover:bg-green hover:text-white'
                          : 'mr-1 mt-1 flex h-[30px] flex-shrink-0 rounded-md border border-green bg-green px-2 pt-1 text-center text-sm text-white transition hover:bg-lime-400/80'
                      }
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2}
                        stroke='currentColor'
                        className='mr-1 h-4 w-4 fill-current'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                        />
                      </svg>
                      {articleDetailShow?.favorited === false
                        ? `Favorite Article (${articleDetailShow?.favoritesCount})`
                        : `Unfavorite Article (${articleDetailShow?.favoritesCount})`}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className='py-4'>
            <div className='container px-2 sm:px-10 md:px-16'>
              <div className='py-4 text-xl text-gray-600'>
                <p>{articleDetailShow?.body}</p>
              </div>
              <div className='my-5 flex flex-wrap justify-start'>
                {articleDetailShow?.tagList.map((tag, index) => (
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
                        src={articleDetailShow?.author.image}
                        alt='avatar'
                        className='h-full w-full rounded-full bg-current object-cover'
                      />
                    </div>
                    <div className='tex-left pr-2'>
                      <div className='text-md cursor-pointer font-light text-green hover:text-lime-600 hover:underline'>
                        {articleDetailShow?.author.username}
                      </div>
                      <span className='block text-[12px] text-gray-400'>
                        {formatDate(articleDetailShow?.createdAt)}
                      </span>
                    </div>
                  </div>
                  {articleDetailShow.author.username === profile?.username && (
                    <>
                      <button className='mr-1 mt-1 flex h-[30px] flex-shrink-0 rounded-md border border-gray-300 bg-white px-2 pt-1 text-center text-sm text-gray-400 transition hover:bg-gray-300 hover:text-white'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='mr-1 h-4 w-4 '
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
                          />
                        </svg>
                        Edit Article
                      </button>
                      <button className='mr-1 mt-1 flex h-[30px] flex-shrink-0 rounded-md border border-red-400/50 bg-white px-2 pt-1 text-center text-sm text-red-700/80 transition hover:bg-red-800/70 hover:text-white'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='mr-1 h-4 w-4'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                          />
                        </svg>
                        Delete Article
                      </button>
                    </>
                  )}
                  {articleDetailShow.author.username !== profile?.username && (
                    <>
                      <button className='mr-1 mt-1 flex h-[30px] flex-shrink-0 rounded-md border border-gray-300 bg-white px-2 pt-1 text-center text-sm text-gray-400/80 transition hover:bg-gray-300 hover:text-white'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={3}
                          stroke='currentColor'
                          className='mr-1  h-4 w-4'
                        >
                          <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                        </svg>
                        Follow {articleDetailShow?.author.username}
                      </button>
                      <button
                        onClick={() => {
                          !articleDetailShow?.favorited
                            ? handleAddFavorite(articleDetailShow.slug)
                            : handleRemoveFavorite(articleDetailShow.slug)
                        }}
                        className={
                          articleDetailShow?.favorited === false
                            ? 'mr-1 mt-1 flex h-[30px] flex-shrink-0 rounded-md border border-green bg-green/70 px-2 pt-1 text-center text-sm text-white transition hover:bg-green hover:text-white'
                            : 'mr-1 mt-1 flex h-[30px] flex-shrink-0 rounded-md border border-green bg-green px-2 pt-1 text-center text-sm text-white transition'
                        }
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={2}
                          stroke='currentColor'
                          className='mr-1 h-4 w-4 fill-current'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                          />
                        </svg>
                        {articleDetailShow?.favorited === false
                          ? `Favorite Article (${articleDetailShow?.favoritesCount})`
                          : `Unfavorite Article (${articleDetailShow?.favoritesCount})`}
                      </button>
                    </>
                  )}
                </div>
                {!isAuthenticated && (
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
                )}
                {isAuthenticated && (
                  <div className='container'>
                    <div className='grid grid-cols-12'>
                      <div className='col-span-12 md:col-span-6 md:col-start-4 xl:col-span-8 xl:col-start-3'>
                        <div className='rounded-md border border-gray-300'>
                          <div className=''>
                            <textarea
                              placeholder='Write a comment...'
                              rows={3}
                              className='h-full w-full rounded-md p-4 outline-none'
                            ></textarea>
                          </div>
                          <div className='flex flex-wrap justify-between border-t border-t-gray-300 bg-gray-200 px-6 py-2'>
                            <div className='mr-2 h-8 w-8 flex-shrink-0 cursor-pointer'>
                              <img
                                src={profile?.image}
                                alt='avatar'
                                className='h-full w-full rounded-full bg-current object-cover'
                              />
                            </div>
                            <div className=' flex-shrink-0 cursor-pointer '>
                              <button className='flex-shrink-0 rounded-md border border-green bg-green/70 px-2 py-1 pt-1 text-center text-sm font-bold text-white transition hover:bg-green hover:text-white'>
                                Post comment
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
