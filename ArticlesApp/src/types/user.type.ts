export interface User {
  email: string
  username: string
  password: string
  bio?: string
  image?: string
  token?: string
}

export interface UserFavorite {
  id: number
  email: string
  username: string
  password: string
  image: string
  bio: null
  demo: boolean
}
