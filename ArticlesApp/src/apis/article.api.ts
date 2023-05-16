import { ArticleList } from 'src/types/article.type'
import http from 'src/utils/http'

const controller = new AbortController()
export const getArticles = () =>
  http.get<ArticleList>(`articles/?limit=10&offset=0`, {
    signal: controller.signal
  })
