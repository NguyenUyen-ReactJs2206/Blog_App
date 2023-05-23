import { User } from './user.type'
import { SuccessResponseApi } from './utils.type'

export type AuthResponse = SuccessResponseApi<User>

export type AuthSuccess = SuccessResponseApi<{
  email: string
  username: string
  password: string
  bio: string
  image: string
  token: string
}>
