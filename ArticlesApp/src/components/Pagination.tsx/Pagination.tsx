/* eslint-disable jsx-a11y/anchor-is-valid */
import { PaginationType } from 'src/constants/pagination'

type Props = {
  onChangePage: (page: number) => void
  pagination: PaginationType
}
export default function Pagination({ onChangePage, pagination }: Props) {
  const active = pagination.currentPage
  const items = []
  for (let i = 1; i <= pagination.totalPage; i++) {
    items.push(
      <a
        onClick={() => onChangePage(i)}
        key={i}
        href='#'
        className='border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 '
      >
        {i}
      </a>
    )
  }

  return (
    <div className='flex flex-grow '>
      <a
        onClick={() => {
          if (pagination.currentPage > 0) {
            onChangePage(pagination.currentPage - 1)
          }
        }}
        href='#'
        className='ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 '
      >
        Previous
      </a>

      {items}

      <a
        onClick={() => {
          if (pagination.currentPage <= pagination.totalPage) {
            onChangePage(pagination.currentPage + 1)
          }
        }}
        href='#'
        className='rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 '
      >
        Next
      </a>
    </div>
  )
}
