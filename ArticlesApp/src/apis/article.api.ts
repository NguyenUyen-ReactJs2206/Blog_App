import { ArticleList } from 'src/types/article.type'
import http from 'src/utils/http'

export const getArticles = (limit: number, offset: number, signal: AbortSignal) =>
  http.get<ArticleList>(`articles/?limit=${limit}&offset=${offset}`, { signal: signal })
