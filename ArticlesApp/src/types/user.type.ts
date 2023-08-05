export interface User {
  email: string
  username: string
  password: string
  bio?: string
  image?: string
  token?: string
}

export interface ProfileType {
  username: string
  bio: string
  image: string
  following?: boolean
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
export interface UserSetting {
  image: string
  username: string
  bio: string
  email: string
}
