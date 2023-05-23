export const saveTokenToLS = (token: string) => {
  localStorage.setItem('access_token', token)
}

export const clearTokenFromLs = () => {
  localStorage.removeItem('access_token')
}

export const getTokenFromLs = () => localStorage.getItem('access_token') || ''
