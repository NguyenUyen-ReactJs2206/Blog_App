import { useSearchParams } from 'react-router-dom'
//Lay duoc Query Param tren URL
export default function useQueryParams() {
  const [searchParams] = useSearchParams()
  return Object.fromEntries([...searchParams])
}
