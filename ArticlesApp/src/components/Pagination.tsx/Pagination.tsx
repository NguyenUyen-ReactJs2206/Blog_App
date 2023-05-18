/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import { PaginationType } from 'src/constants/pagination'

type Props = {
  onChangePage: (page: number) => void
  pagination: PaginationType
}
export default function Pagination({ onChangePage, pagination }: Props) {
  const page = pagination.currentPage
  const items = []
  for (let i = 1; i <= pagination.totalPage; i++) {
    items.push(
      <div>
        <NavLink
          to='/'
          onClick={() => onChangePage(i)}
          key={i}
          className={classNames('shadow-sm mx-1 rounded-sm border border-green px-3 py-2 leading-tight', {
            'bg-green/60 text-gray-900': page === i,
            'text-gray-60 bg-green/20': page !== i
          })}
        >
          {i}
        </NavLink>
      </div>
    )
  }

  return (
    <div className='my-5 flex h-28 w-full flex-wrap items-center sm:h-20 md:h-28'>
      {page === 1 ? (
        <span className='cursor-not-allowed rounded-l-lg border  border-green bg-green/10  px-3 py-2 leading-tight text-gray-500'>
          Previous
        </span>
      ) : (
        <div>
          <NavLink
            to='/'
            onClick={() => {
              if (pagination.currentPage > 0) {
                onChangePage(pagination.currentPage - 1)
              }
            }}
            className='rounded-l-lg border  border-green bg-green/20 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-green/40 hover:text-gray-900 '
          >
            Previous
          </NavLink>
        </div>
      )}

      {items}

      {page === pagination.totalPage ? (
        <span className='cursor-not-allowed rounded-r-lg border  border-green bg-green/10  px-3 py-2 leading-tight text-gray-500'>
          Next
        </span>
      ) : (
        <div>
          <NavLink
            to='/'
            onClick={() => {
              if (pagination.currentPage <= pagination.totalPage) {
                onChangePage(pagination.currentPage + 1)
              }
            }}
            className='rounded-r-lg border  border-green bg-green/20 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:bg-green/40 hover:text-gray-900 '
          >
            Next
          </NavLink>
        </div>
      )}
    </div>
  )
}
