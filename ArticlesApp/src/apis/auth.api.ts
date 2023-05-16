import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

export const registerAccount = (body: { username: string; email: string; password: string }) =>
  http.post<AuthResponse>('/users', body)
