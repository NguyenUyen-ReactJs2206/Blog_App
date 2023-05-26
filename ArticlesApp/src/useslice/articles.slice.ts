/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteFavoritedArticle, favoritedArticle, getArticleDetail, getArticles } from 'src/apis/article.api'
import { ArticleDetails, ArticleList } from 'src/types/article.type'
import { FavoritedType } from 'src/types/favorite.type'

interface ArticleState {
  articleList: ArticleList
  articleDetail: ArticleDetails | null
  favoritesArticle: FavoritedType | null
  unFavoritedArticle: FavoritedType | null
}
const initialState: ArticleState = {
  articleList: { articles: [], articlesCount: '' },
  articleDetail: null,
  favoritesArticle: null,
  unFavoritedArticle: null
}
//Get List Article
export const getArticleListThunk = createAsyncThunk('articles/getArticleList', async (params: any, thunkAPI) => {
  const response = await getArticles(params, thunkAPI.signal)
  console.log(response, 'getArticleeee')
  return response.data
})

//Get ArticleDetail
export const getArticleDetailThunk = createAsyncThunk('articles/getArticleDetail', async (id: string, thunkAPI) => {
  const response = await getArticleDetail(id, thunkAPI.signal)
  return response.data
})

//Post Favorites
export const postFavoritedArticleThunk = createAsyncThunk('articles/favorited', async (id: string, thunkAPI) => {
  const response = await favoritedArticle(id, thunkAPI.signal)
  console.log(response, 'PostAAAAAAAAA')
  return response.data
})

//Delete Favorites
export const deleteFavoriteArticleThunk = createAsyncThunk('blog/deleteFavorite', async (id: string, thunkAPI) => {
  const response = await deleteFavoritedArticle(id, thunkAPI.signal)
  console.log(response, 'Deleteeee')
  return response.data
})

const articlesSlice = createSlice({
  name: 'articles',
  initialState: initialState,
  reducers: {},
  // Xu ly trong extraReducer de khong co generate ra action
  extraReducers(buider) {
    buider.addCase(getArticleListThunk.fulfilled, (state, action) => {
      state.articleList = action.payload
    }),
      buider.addCase(getArticleDetailThunk.fulfilled, (state, action) => {
        state.articleDetail = action.payload
      }),
      buider.addCase(postFavoritedArticleThunk.fulfilled, (state, action) => {
        state.favoritesArticle = action.payload
      }),
      buider.addCase(deleteFavoriteArticleThunk.fulfilled, (state, action) => {
        state.unFavoritedArticle = action.payload
      })
  }
})

const articlesReducer = articlesSlice.reducer
export default articlesReducer
