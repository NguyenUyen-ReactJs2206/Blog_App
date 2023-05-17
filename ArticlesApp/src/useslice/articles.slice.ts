/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'
import { ArticleList } from 'src/types/article.type'

interface ArticleState {
  articleList: ArticleList[]
}
const initialState: ArticleState = {
  articleList: []
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState: initialState,
  reducers: {},
  extraReducers(buider) {
    buider.addCase('article/getListArticleSuccess', (state, action: any) => {
      state.articleList = action.payload
    })
  }
})

const articlesReducer = articlesSlice.reducer
export default articlesReducer
