import { UserFavorite } from './user.type'

export interface FavoritedType {
  article: {
    id: number
    slug: string
    title: string
    description: string
    body: string
    createdAt: string
    updatedAt: string
    authorId: number
    tagList: never[]
    author: {
      username: string
      bio: null
      image: string
      following: boolean
    }
    favoritedBy: UserFavorite[]
    favorited: boolean
    favoritesCount: number
  }
}
