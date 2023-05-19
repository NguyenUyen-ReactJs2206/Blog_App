import { SuccessArticle } from './utils.type'

type ListArticle = {
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

export interface ArticleListConfig {
  limit?: number | string
  offset?: number | string
}
export type ArticleList = SuccessArticle<ListArticle>
