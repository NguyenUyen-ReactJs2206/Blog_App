import { ArticleDetails, ArticleList, ArticleListConfig, ListArticle } from 'src/types/article.type'
import { FavoritedType } from 'src/types/favorite.type'
import { PostArticleSuccess } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL = 'articles'
export const getArticles = (params: ArticleListConfig, signal: AbortSignal) =>
  http.get<ArticleList>(URL, { params, signal: signal })

export const getArticleDetail = (id: string, signal: AbortSignal) =>
  http.get<ArticleDetails>(`${URL}/${id}`, { signal })

export const getArticlesFeed = (params: ArticleListConfig, signal: AbortSignal) =>
  http.get<ArticleList>(`${URL}/feed`, { params, signal: signal })

export const getListFavoriteArtile = (params: ArticleListConfig, signal: AbortSignal) =>
  http.get<FavoritedType>(URL, { params, signal })

export const favoritedArticle = (id: string, signal: AbortSignal) =>
  http.post<FavoritedType>(`${URL}/${id}/favorite`, { signal })

export const deleteFavoritedArticle = (id: string, signal: AbortSignal) =>
  http.delete<FavoritedType>(`${URL}/${id}/favorite`, { signal })

export const addArticle = (
  body: { body: string; description: string; tagList: string[]; title: string },
  signal: AbortSignal
) => http.post<PostArticleSuccess<ListArticle>>(URL, body, { signal })
