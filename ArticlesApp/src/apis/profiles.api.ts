import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

const URL = '/user'
export const getProfile = (signal: AbortSignal) => http.get<AuthResponse>(URL, { signal })
