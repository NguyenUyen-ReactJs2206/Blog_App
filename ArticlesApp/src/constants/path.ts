const path = {
  home: '/',
  login: '/login',
  register: '/register',
  articles: '/article',
  globalFeed: '/article/globalfeed',
  yourFeed: '/article/feed',
  tag: '/:tag',
  articleDetail: '/:nameId',
  editor: '/editor',
  settings: '/settings',
  profile: '/profiles'
} as const

export default path
