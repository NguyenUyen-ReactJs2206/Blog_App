import { SuccessArticle, SuccessArticleDetail } from './utils.type'

export type ListArticle = {
  slug: string
  title: string
  description: string
  body: string
  tagList: string[]
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number
  author: {
    username: string
    bio: null
    image: string
    following: boolean
  }
}

export type ListArticleDetail = {
  slug: string
  title: string
  description: string
  body: string
  tagList: string[]
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number
  author: {
    username: string
    bio: null
    image: string
    following: boolean
  }
}
export type BodyPostArticle = { body: string; description: string; tagList: string[]; title: string }

export interface ArticleListConfig {
  limit?: number | string
  offset?: number | string
  tag?: string
  favorited?: string
  author?: string
}
export type ArticleList = SuccessArticle<ListArticle>

export type ArticleDetails = SuccessArticleDetail<ListArticleDetail>
