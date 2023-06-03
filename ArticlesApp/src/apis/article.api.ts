import { ArticleDetails, ArticleList, ArticleListConfig, BodyPostArticle, ListArticle } from 'src/types/article.type'
import { FavoritedType } from 'src/types/favorite.type'
import { PostArticleSuccess } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL = 'articles'
export const getArticles = (params: ArticleListConfig, signal: AbortSignal) =>
  http.get<ArticleList>(URL, { params, signal: signal })

//Detail
export const getArticleDetail = (id: string, signal: AbortSignal) =>
  http.get<ArticleDetails>(`${URL}/${id}`, { signal })

export const getArticlesYourFeed = (params: ArticleListConfig, signal: AbortSignal) =>
  http.get<ArticleList>(`${URL}/feed`, { params, signal: signal })

export const getListMyArticle = (params: ArticleListConfig, signal: AbortSignal) =>
  http.get<ArticleList>(URL, { params, signal })

//Favorited
export const getListFavoriteArticle = (params: ArticleListConfig, signal: AbortSignal) =>
  http.get<ArticleList>(URL, { params, signal })

export const favoritedArticle = (id: string, signal: AbortSignal) =>
  http.post<FavoritedType>(`${URL}/${id}/favorite`, { signal })

export const deleteFavoritedArticle = (id: string, signal: AbortSignal) =>
  http.delete<FavoritedType>(`${URL}/${id}/favorite`, { signal })

//CRUD
export const addArticle = (body: BodyPostArticle, signal: AbortSignal) =>
  http.post<PostArticleSuccess<ListArticle>>(URL, body, { signal })

export const updateArticle = (id: string, body: BodyPostArticle, signal: AbortSignal) =>
  http.put<PostArticleSuccess<ListArticle>>(`${URL}/${id}`, body, { signal })

export const deleteArticle = (id: string, signal: AbortSignal) => http.delete<FavoritedType>(`${URL}/${id}`, { signal })
