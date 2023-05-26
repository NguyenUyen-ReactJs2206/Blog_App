/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getArticles } from 'src/apis/article.api'
import { ArticleDetails, ArticleList } from 'src/types/article.type'

interface ArticleState {
  articleList: ArticleList
  articleDetail: ArticleDetails | null
}
const initialState: ArticleState = {
  articleList: { articles: [], articlesCount: '' },
  articleDetail: null
}

export const getArticleList = createAsyncThunk('articles/getArticleList', async (params: any, thunkAPI) => {
  const response = await getArticles(params, thunkAPI.signal)
  console.log(response, 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
  return response.data
})

const articlesSlice = createSlice({
  name: 'articles',
  initialState: initialState,
  reducers: {},
  // Xu ly trong extraReducer de khong co generate ra action
  extraReducers(buider) {
    buider.addCase(getArticleList.fulfilled, (state, action) => {
      console.log(state.articleList, 'sssssssssssssssssssssssssssss')
      state.articleList = action.payload
    }),
      buider.addCase('article/getArticleDetail', (state, action: any) => {
        state.articleDetail = action.payload
      })
  }
})

const articlesReducer = articlesSlice.reducer
export default articlesReducer
