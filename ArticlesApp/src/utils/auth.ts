export const saveTokenToLS = (token: string) => {
  localStorage.setItem('token', token)
}

export const clearTokenFromLs = () => {
  localStorage.removeItem('token')
}

export const getTokenFromLs = () => localStorage.getItem('token') || ''
