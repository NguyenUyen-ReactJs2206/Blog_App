import { User } from 'src/types/user.type'

export const LocalStorageEventTarget = new EventTarget()

export const saveTokenToLS = (token: string) => {
  localStorage.setItem('access_token', token)
}

export const clearLS = () => {
  localStorage.removeItem('access_token')
}

export const getTokenFromLs = () => localStorage.getItem('access_token') || ''

export const saveProfileToLS = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}

export const getProfileFromLS = () => {
  const result = localStorage.getItem('profile')
  return result ? JSON.parse(result) : ''
}
