import { AuthResponse } from 'src/types/auth.type'
import { UserSetting } from 'src/types/user.type'
import http from 'src/utils/http'

const URL = '/user'
export const getProfile = (signal: AbortSignal) => http.get<AuthResponse>(URL, { signal })

export const updateProfile = (body: UserSetting, signal: AbortSignal) => http.put<AuthResponse>(URL, body, { signal })
