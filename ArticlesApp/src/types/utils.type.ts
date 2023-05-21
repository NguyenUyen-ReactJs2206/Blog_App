export interface SuccessResponseApi<UserData> {
  user: UserData
}

export interface SuccessArticle<ListArticle> {
  articles: ListArticle[]
  articlesCount: number
}

export interface SuccessArticleDetail<ListArticle> {
  article: ListArticle
}

export interface ErrorMessage {
  errors: {
    email: string[]
    username: string[]
  }
}
