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
  profile: '/profiles',
  favoritedArticle: '/profiles/favorites'
} as const

export default path
