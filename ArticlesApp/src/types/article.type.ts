import { SuccessArticle } from './utils.type'

export type ArticleList = SuccessArticle<{
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
}>

export type ListArticleConfig = {
  limit: number
  offset: number
}
