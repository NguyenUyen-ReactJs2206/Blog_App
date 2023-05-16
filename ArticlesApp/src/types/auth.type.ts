import { SuccessResponseApi } from './utils.type'

export type AuthResponse = SuccessResponseApi<{
  email?: string
  username?: string
  password?: string
  bio?: string
  image?: string
  token?: string
}>
