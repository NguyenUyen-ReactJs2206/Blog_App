export interface SuccessResponseApi<UserData> {
  user: UserData
}
export interface SuccessArticle<ListArticle> {
  articles: ListArticle[]
  articlesCount: number | string
}

export interface SuccessArticleDetail<ListArticle> {
  article: ListArticle
}

export interface PostArticleSuccess<ListArticle> {
  article: ListArticle
}

export interface ErrorUnprocessableEntityMessage {
  errors: {
    email: string[]
    username: string[]
  }
}

export interface ErrorForbiddenMessage {
  errors: {
    'email or password': string[]
  }
}
