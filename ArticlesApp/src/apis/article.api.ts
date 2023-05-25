import { ArticleDetails, ArticleList, ArticleListConfig, ListArticle } from 'src/types/article.type'
import http from 'src/utils/http'

const URL = 'articles'
export const getArticles = (params: ArticleListConfig, signal: AbortSignal) =>
  http.get<ArticleList>(URL, { params, signal: signal })

export const getArticleDetail = (id: string, signal: AbortSignal) =>
  http.get<ArticleDetails>(`${URL}/${id}`, { signal })

//Async Thunk
// export const getArticles = (params: ArticleListConfig, signal: AbortSignal) =>
// http.get<ArticleList>(`articles/?limit=${params.limit}&offset=${params.offset}`, { signal: signal })

export const addArticle = (body: ListArticle, params: string) => http.post<ListArticle>(`${URL}/${params}`, body)

// const purchaseApi = {
//   addToCart: (body: { product_id: string; buy_count: number }) => {
//     return http.post<SuccessResponseApi<Purchase>>(`${URL}/add-to-cart`, body)
//   },
//   getPurchases: (params: { status: PurchaseListStatus }) => {
//     return http.get<SuccessResponseApi<Purchase[]>>(`${URL}`, {
//       params: params
//     })
//   },
//   buyProducts: (body: { product_id: string; buy_count: number }[]) => {
//     return http.post<SuccessResponseApi<Purchase[]>>(`${URL}/buy-products`, body)
//   },
//   updatePurchase: (body: { product_id: string; buy_count: number }) => {
//     return http.put<SuccessResponseApi<Purchase>>(`${URL}/update-purchase`, body)
//   },
//   deletePurchase: (purchaseIds: string[]) => {
//     return http.delete<SuccessResponseApi<{ deleted_count: number }>>(`${URL}`, {
//       data: purchaseIds
//     })
//   }
// }
