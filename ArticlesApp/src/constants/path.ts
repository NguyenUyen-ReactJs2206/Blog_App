const path = {
  home: '/',
  login: '/login',
  register: '/register',
  articles: '/article',
  globalFeed: '/global',
  yourFeed: '/article/feed',
  tag: '/article/tag',
  articleDetail: '/:nameId',
  editor: '/editor',
  settings: '/settings',
  profile: '/profiles'
} as const

export default path
