/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteFavoritedArticle, favoritedArticle, getArticleDetail, getArticles } from 'src/apis/article.api'
import { ArticleDetails, ArticleList } from 'src/types/article.type'

interface ArticleState {
  articleList: ArticleList
  articleDetail: ArticleDetails | null
  isFavorites: boolean
}
const initialState: ArticleState = {
  articleList: { articles: [], articlesCount: '' },
  articleDetail: null,
  isFavorites: false
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
  console.log(response.data, 'rrrrrrrrrrrrrrrrrr')
  return response.data
})

//getListFavoriteAriticle
// export const getListFavoriteArtileThunk = createAsyncThunk(
//   'articles/getListFavoriteArtile',
//   async (params: string, thunkAPI) => {
//     const response = await getArticleDetail(params, thunkAPI.signal)
//     return response.data
//   }
// )

// Is Favorites
export const postFavoritedArticleThunk = createAsyncThunk('articles/favorited', async (id: string, thunkAPI) => {
  const response = await favoritedArticle(id, thunkAPI.signal)
  console.log(response, 'PostAAAAAAAAA')
  return response.data
})

// Delete Favorites
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
        //id truyen vao or postId= action.payload.article.slug
        const postId = action.meta.arg
        //Tim vi tri cua article muon favorite
        const articleIndex = state.articleList.articles.find((article) => article.slug === postId)
        // Neu dung vi tri article va favorited=false thi chuyen no thanh true va tang so luong count favorite len 1
        if (articleIndex && !articleIndex.favorited) {
          articleIndex.favorited = true
          articleIndex.favoritesCount++
        }
      }),
      buider.addCase(deleteFavoriteArticleThunk.fulfilled, (state, action) => {
        //id truyen vao or postId= action.payload.article.slug
        const postId = action.meta.arg
        //Tim vi tri cua article muon favorite
        const articleIndex = state.articleList.articles.find((article) => article.slug === postId)
        // Neu dung vi tri article va favorited=false thi chuyen no thanh true va tang so luong count favorite len 1
        if (articleIndex && articleIndex.favorited) {
          articleIndex.favorited = false
          articleIndex.favoritesCount--
        }
      })
  }
})

const articlesReducer = articlesSlice.reducer
export default articlesReducer
