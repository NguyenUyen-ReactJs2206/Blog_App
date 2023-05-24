const path = {
  home: '/',
  login: '/login',
  register: '/register',
  articles: '/articles',
  articleDetail: ':nameId',
  editor: '/editor',
  settings: '/settings',
  profile: '/profiles'
} as const

export default path
