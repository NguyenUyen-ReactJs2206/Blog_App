export interface SuccessResponseApi<User> {
  user: User
}

export interface SuccessArticle<ListArticle> {
  articles: ListArticle[]
  articlesCount: number
}

export interface SuccessArticleDetail<ListArticle> {
  article: ListArticle
}