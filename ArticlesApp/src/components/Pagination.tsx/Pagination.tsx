/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames'
import { NavLink, createSearchParams } from 'react-router-dom'
import { PaginationType } from 'src/constants/pagination'
import path from 'src/constants/path'
import { ArticleListConfig } from 'src/types/article.type'

type Props = {
  onChangePage: (page: number) => void
  pagination: PaginationType
  queryConfig: ArticleListConfig
}
export default function Pagination({ onChangePage, pagination, queryConfig }: Props) {
  const page = Number(pagination.currentPage)
  const items = []
  for (let i = 1; i <= pagination.totalPage; i++) {
    items.push(
      <NavLink
        to={{
          pathname: path.articles,
          search: createSearchParams({
            ...queryConfig,
            limit: pagination.limit.toString(),
            offset: (i - 1).toString()
          }).toString()
        }}
        onClick={() => onChangePage(i)}
        key={i}
        className={classNames('shadow-sm mx-1 rounded-sm border border-green px-3 py-2 leading-tight', {
          'bg-green/60 text-gray-900': page === i,
          'text-gray-60 bg-green/20': page !== i
        })}
      >
        {i}
      </NavLink>
    )
  }

  return (
    <div className='my-5 flex h-44 w-full flex-wrap items-center sm:h-28 md:h-28'>
      {page === 1 ? (
        <span className='cursor-not-allowed rounded-l-lg border  border-green bg-green/10  px-3 py-2 leading-tight text-gray-500'>
          Previous
        </span>
      ) : (
        <NavLink
          to={{
            pathname: path.articles,
            search: createSearchParams({
              ...queryConfig,
              limit: pagination.limit.toString(),
              offset: (page - 2).toString()
            }).toString()
          }}
          onClick={() => {
            if (pagination.currentPage > 0) {
              onChangePage(page - 1)
            }
          }}
          className='rounded-l-lg border  border-green bg-green/20 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-green/40 hover:text-gray-900 '
        >
          Previous
        </NavLink>
      )}

      {items}

      {page === pagination.totalPage ? (
        <span className='cursor-not-allowed rounded-r-lg border  border-green bg-green/10  px-3 py-2 leading-tight text-gray-500'>
          Next
        </span>
      ) : (
        <NavLink
          to={{
            pathname: path.articles,
            search: createSearchParams({
              ...queryConfig,
              limit: pagination.limit.toString(),
              offset: page.toString()
            }).toString()
          }}
          onClick={() => {
            if (pagination.currentPage <= pagination.totalPage) {
              onChangePage(page + 1)
            }
          }}
          className='rounded-r-lg border  border-green bg-green/20 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:bg-green/40 hover:text-gray-900 '
        >
          Next
        </NavLink>
      )}
    </div>
  )
}
