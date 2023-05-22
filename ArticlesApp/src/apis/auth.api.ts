import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

const URL = '/users'
export const registerAccount = (body: { username: string; email: string; password: string }, signal: AbortSignal) =>
  http.post<AuthResponse>(URL, body, { signal })

export const loginAccount = (body: { email: string; password: string }, signal: AbortSignal) =>
  http.post<AuthResponse>(`${URL}/login`, body, { signal })
