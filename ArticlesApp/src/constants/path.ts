const path = {
  home: '/',
  login: '/login',
  register: '/register',
  articles: '/articles',
  feed: '/feed',
  articleDetail: ':nameId',
  editor: '/editor',
  settings: '/settings',
  profile: '/profiles'
} as const

export default path
