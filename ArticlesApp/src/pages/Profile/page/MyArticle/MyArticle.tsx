import { useMemo, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { PAGINATION, PaginationType } from 'src/constants/pagination'
import useQueryParams from 'src/hooks/useQueryParams'
import { RootState, useAppDispatch } from 'src/store'
import { ArticleListConfig } from 'src/types/article.type'
import {
  deleteFavoriteArticleThunk,
  getListMyArtileThunk,
  postFavoritedArticleThunk
} from 'src/useslice/articles.slice'
import { formatDate } from 'src/helpers/formatDate'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import Pagination from 'src/components/Pagination.tsx'

export default function MyArticle() {
  const myArticles = useSelector((state: RootState) => state.articlesReducer.myArticles)
  const profile = useSelector((state: RootState) => state.userReducer.profile?.user)

  //pagination
  const [pagination, setPagination] = useState<PaginationType>({
    limit: PAGINATION.LIMIT,
    currentPage: PAGINATION.CURRENT_PAGE,
    totalPage: PAGINATION.TOTAL_PAGE
  })
  const queryParams: ArticleListConfig = useQueryParams()

  const queryConfig: ArticleListConfig = useMemo(
    () => ({
      limit: queryParams.limit || PAGINATION.LIMIT,
      offset: queryParams.offset || (pagination.currentPage - 1) * PAGINATION.LIMIT,
      author: profile?.username
    }),
    [queryParams.limit, queryParams.offset, pagination.currentPage, profile?.username]
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    const promise = dispatch(getListMyArtileThunk(queryConfig))
    setPagination((prev) => ({
      ...prev,
      totalPage: Math.ceil(Number(myArticles.articlesCount) / PAGINATION.LIMIT)
    }))
    return () => {
      promise.abort()
    }
  }, [queryConfig, dispatch, myArticles.articlesCount])

  const onChangePage = (page: number) => {
    setPagination((pagina) => ({ ...pagina, currentPage: page }))
  }

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
    <div className=''>
      {myArticles.articles.length === 0 && <div className='py-4'>No articles are here... yet.</div>}
      {myArticles.articles.map((article) => (
        <div className='border-t border-gray-200 py-3' key={article.slug}>
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
              <button
                onClick={() => {
                  !article.favorited ? handleAddFavorite(article.slug) : handleRemoveFavorite(article.slug)
                }}
                className={
                  article.favorited === false
                    ? 'mr-4 flex cursor-pointer rounded-sm border border-green bg-white stroke-none px-2 py-1 text-center text-green hover:bg-green hover:text-white'
                    : 'mr-4 flex cursor-pointer rounded-sm border border-green bg-green stroke-none px-2 py-1 text-center text-white'
                }
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className=' mt-1 h-4 w-4 fill-current'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                  />
                </svg>
                {article.favoritesCount}
              </button>
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
      {myArticles.articles.length !== 0 && (
        <Pagination onChangePage={onChangePage} queryConfig={queryConfig} pagination={pagination} />
      )}
    </div>
  )
}
