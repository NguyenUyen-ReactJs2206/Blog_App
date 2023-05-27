import { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getArticlesFeed } from 'src/apis/article.api'
import { PAGINATION, PaginationType } from 'src/constants/pagination'
import path from 'src/constants/path'
import { formatDate } from 'src/helpers/formatDate'
import useQueryParams from 'src/hooks/useQueryParams'
import { ArticleList, ArticleListConfig } from 'src/types/article.type'

export default function YourFeed() {
  const queryParams: ArticleListConfig = useQueryParams()
  const [articles, setArticles] = useState<ArticleList>()

  //pagination
  const [pagination, setPagination] = useState<PaginationType>({
    limit: PAGINATION.LIMIT,
    currentPage: PAGINATION.CURRENT_PAGE,
    totalPage: PAGINATION.TOTAL_PAGE
  })
  const queryConfig: ArticleListConfig = useMemo(
    () => ({
      limit: queryParams.limit || PAGINATION.LIMIT,
      offset: queryParams.offset || (pagination.currentPage - 1) * PAGINATION.LIMIT
    }),
    [queryParams.limit, queryParams.offset, pagination.currentPage]
  )

  const dispatch = useDispatch()

  useEffect(() => {
    const controller = new AbortController()
    getArticlesFeed(queryConfig, controller.signal)
      .then((res) => {
        const articleListResult = res.data
        setArticles(articleListResult)
        setPagination((prev) => ({
          ...prev,
          totalPage: Math.ceil(res?.data.articlesCount / PAGINATION.LIMIT)
        }))

        dispatch({
          type: 'article/getListArticleSuccess',
          payload: articleListResult
        })
      })
      //khi abort ko muon dispatch len
      .catch((error) => {
        // if (!(error.code === 'ERR_CANCELED')) {
        //   dispatch({
        //     type: 'article/getListArticleFaild',
        //     payload: error
        //   })
        // }
      })
    return () => {
      controller.abort()
    }
  }, [queryConfig, dispatch])
  return (
    <>
      {!articles && <div className='py-8'>Loading articles...</div>}
      {articles?.articlesCount === 0 && <div className='py-8'>No articles are here... yet.</div>}
      {articles?.articles.map((article, index) => (
        <div className='border-t border-gray-200 py-3' key={index}>
          <div className='flex justify-between py-3'>
            <div className='flex justify-start'>
              <div className='mr-2 h-11 w-11 flex-shrink-0 '>
                <img
                  src={article.author.image}
                  alt='avatar'
                  className='h-full w-full rounded-full bg-current object-cover'
                />
              </div>
              <div className='tex-left'>
                <div className='text-md text-green'>{article.author.username}</div>
                <span className='block text-[12px] text-gray-400'>{formatDate(article.createdAt)}</span>
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
                <span>{article.favoritesCount}</span>
              </div>
            </div>
          </div>
          <Link to={`${path.articles}/${article.slug}`}>
            <h1 className='text-xl font-semibold text-gray-800'>{article.title} </h1>
            <p className='text-md font-light text-gray-400'>{article.description}</p>{' '}
          </Link>
          <div className='flex justify-between py-4'>
            <div className='flex-start cursor-pointer text-sm text-gray-400 hover:text-green'>
              <span>Read more...</span>
            </div>
            <div className='flex-end flex'>
              {article.tagList.map((tag, index) => (
                <div
                  key={index}
                  className='ml-1 cursor-pointer rounded-xl border border-gray-300 px-1 text-sm text-gray-400'
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}