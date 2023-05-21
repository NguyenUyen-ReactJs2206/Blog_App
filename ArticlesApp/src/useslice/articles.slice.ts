/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'
import { ArticleDetails, ArticleList } from 'src/types/article.type'

interface ArticleState {
  articleList: ArticleList[]
  articleDetail: ArticleDetails | null
}
const initialState: ArticleState = {
  articleList: [],
  articleDetail: null
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState: initialState,
  reducers: {},

  // Xu ly trong extraReducer de khong co generate ra action
  extraReducers(buider) {
    buider.addCase('article/getListArticleSuccess', (state, action: any) => {
      state.articleList = action.payload
    }),
      buider.addCase('article/getArticleDetail', (state, action: any) => {
        state.articleDetail = action.payload
      })
  }
})

const articlesReducer = articlesSlice.reducer
export default articlesReducer
