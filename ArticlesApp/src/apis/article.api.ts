import { ArticleDetails, ArticleList, ArticleListConfig } from 'src/types/article.type'
import http from 'src/utils/http'

const URL = 'articles'
export const getArticles = (params: ArticleListConfig, signal: AbortSignal) =>
  http.get<ArticleList>(URL, { params, signal: signal })

export const getArticleDetail = (id: string, signal: AbortSignal) =>
  http.get<ArticleDetails>(`${URL}/${id}`, { signal })

//Async Thunk
// export const getArticles = (params: ArticleListConfig, signal: AbortSignal) =>
// http.get<ArticleList>(`articles/?limit=${params.limit}&offset=${params.offset}`, { signal: signal })
