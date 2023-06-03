/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  addArticle,
  deleteArticle,
  deleteFavoritedArticle,
  favoritedArticle,
  getArticleDetail,
  getArticles,
  getArticlesYourFeed,
  getListFavoriteArticle,
  getListMyArticle,
  updateArticle
} from 'src/apis/article.api'
import { ArticleDetails, ArticleList, ListArticle } from 'src/types/article.type'

interface ArticleState {
  articleList: ArticleList
  articlesYourFeed: ArticleList
  articleDetail: ArticleDetails | null
  favoritedArticles: ArticleList
  myArticles: ArticleList
  editingArticle: ListArticle | null
}
const initialState: ArticleState = {
  articleList: { articles: [], articlesCount: '' },
  articlesYourFeed: { articles: [], articlesCount: '' },
  articleDetail: null,
  favoritedArticles: { articles: [], articlesCount: '' },
  myArticles: { articles: [], articlesCount: '' },
  editingArticle: null
}
//Get List Article
export const getArticleListThunk = createAsyncThunk('articles/getArticleList', async (params: any, thunkAPI) => {
  const response = await getArticles(params, thunkAPI.signal)
  return response.data
})

//Get List Article Your Feed
export const getArticlesYourFeedThunk = createAsyncThunk(
  'articles/getArticlesYourFeed',
  async (params: any, thunkAPI) => {
    const response = await getArticlesYourFeed(params, thunkAPI.signal)
    return response.data
  }
)

//Get ArticleDetail
export const getArticleDetailThunk = createAsyncThunk('articles/getArticleDetail', async (id: string, thunkAPI) => {
  const response = await getArticleDetail(id, thunkAPI.signal)
  return response.data
})

// getListFavoriteAriticle
export const getListFavoriteArtileThunk = createAsyncThunk(
  'articles/getListFavoriteArtile',
  async (params: any, thunkAPI) => {
    const response = await getListFavoriteArticle(params, thunkAPI.signal)
    return response.data
  }
)

//getListMyArticle
export const getListMyArtileThunk = createAsyncThunk('articles/getListMyArtile', async (params: any, thunkAPI) => {
  const response = await getListMyArticle(params, thunkAPI.signal)
  return response.data
})

// Is Favorites
export const postFavoritedArticleThunk = createAsyncThunk('articles/favorited', async (id: string, thunkAPI) => {
  const response = await favoritedArticle(id, thunkAPI.signal)
  return response.data
})

// Delete Favorites
export const deleteFavoriteArticleThunk = createAsyncThunk('blog/deleteFavorite', async (id: string, thunkAPI) => {
  const response = await deleteFavoritedArticle(id, thunkAPI.signal)
  return response.data
})

// CRUD
export const addArticleThunk = createAsyncThunk('articles/addArticle', async (body: any, thunkAPI) => {
  const response = await addArticle(body, thunkAPI.signal)
  return response.data.article
})

export const updateArticleThunk = createAsyncThunk(
  'blog/updateArticle',
  async ({ id, body }: { id: string; body: any }, thunkAPI) => {
    const response = await updateArticle(id, body, thunkAPI.signal)
    console.log(response, 'reeeeeeeeeeeeeeee')
    return response.data
  }
)
export const deleteArticleThunk = createAsyncThunk('blog/deleteArticle', async (id: string, thunkAPI) => {
  const response = await deleteArticle(id, thunkAPI.signal)
  return response.data
})

const articlesSlice = createSlice({
  name: 'articles',
  initialState: initialState,
  reducers: {
    resetStateDetail(state) {
      state.articleDetail = null
    },
    startEditingPost: (state, action) => {
      const postId = action.payload
      const foundPost = state.articleList.articles.find((item) => item.slug === postId) || null
      state.editingArticle = foundPost
    },
    cancelEditingPost: (state) => {
      state.editingArticle = null
    }
  },
  // Xu ly trong extraReducer de khong co generate ra action
  extraReducers(buider) {
    buider.addCase(getArticleListThunk.fulfilled, (state, action) => {
      state.articleList = action.payload
    }),
      buider.addCase(getArticlesYourFeedThunk.fulfilled, (state, action) => {
        state.articlesYourFeed = action.payload
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

        if (state.articleDetail?.article.slug === postId && !state.articleDetail.article.favorited) {
          state.articleDetail.article.favorited = true
          state.articleDetail.article.favoritesCount++
        }

        const articlesYourFeedIndex = state.articlesYourFeed.articles.find((article) => article.slug === postId)
        if (articlesYourFeedIndex && !articlesYourFeedIndex.favorited) {
          articlesYourFeedIndex.favorited = true
          articlesYourFeedIndex.favoritesCount++
        }

        const myArticleIndex = state.myArticles.articles.find((article) => article.slug === postId)
        if (myArticleIndex && !myArticleIndex.favorited) {
          myArticleIndex.favorited = true
          myArticleIndex.favoritesCount++
        }

        const favoritedArticleIndex = state.favoritedArticles.articles.find((article) => article.slug === postId)
        if (favoritedArticleIndex && !favoritedArticleIndex.favorited) {
          favoritedArticleIndex.favorited = true
          favoritedArticleIndex.favoritesCount++
        }
      }),
      buider.addCase(deleteFavoriteArticleThunk.fulfilled, (state, action) => {
        const postId = action.meta.arg

        const articleIndex = state.articleList.articles.find((article) => article.slug === postId)
        if (articleIndex && articleIndex.favorited) {
          articleIndex.favorited = false
          articleIndex.favoritesCount--
        }

        if (state.articleDetail?.article.slug === postId && state.articleDetail.article.favorited) {
          state.articleDetail.article.favorited = false
          state.articleDetail.article.favoritesCount--
        }

        const articlesYourFeedIndex = state.articlesYourFeed.articles.find((article) => article.slug === postId)
        if (articlesYourFeedIndex && articlesYourFeedIndex.favorited) {
          articlesYourFeedIndex.favorited = false
          articlesYourFeedIndex.favoritesCount--
        }

        const myArticleIndex = state.myArticles.articles.find((article) => article.slug === postId)
        if (myArticleIndex && myArticleIndex.favorited) {
          myArticleIndex.favorited = false
          myArticleIndex.favoritesCount--
        }

        const favoritedArticleIndex = state.favoritedArticles.articles.find((article) => article.slug === postId)
        if (favoritedArticleIndex && favoritedArticleIndex.favorited) {
          favoritedArticleIndex.favorited = false
          favoritedArticleIndex.favoritesCount--
        }
      }),
      buider.addCase(getListFavoriteArtileThunk.fulfilled, (state, action) => {
        state.favoritedArticles = action.payload
      }),
      buider.addCase(getListMyArtileThunk.fulfilled, (state, action) => {
        state.myArticles = action.payload
      }),
      //CRUD
      buider.addCase(addArticleThunk.fulfilled, (state, action) => {
        state.articleList.articles.push(action.payload)
      }),
      buider.addCase(updateArticleThunk.fulfilled, (state, action) => {
        const postId = action.meta.arg.id
        state.articleList.articles.find((article, index) => {
          if (article.slug === postId) {
            state.articleList.articles[index] = action.payload.article
            //return cho dung vong lap
            return true
          }
          return false
        })
        if (state.articleDetail?.article.slug === postId) {
          state.articleDetail.article = action.payload.article
        }
        state.editingArticle = null
      }),
      buider.addCase(deleteArticleThunk.fulfilled, (state, action) => {
        const postId = action.meta.arg
        const articleDeleteIndex = state.articleList.articles.findIndex((item) => item.slug === postId)
        if (articleDeleteIndex !== -1) {
          state.articleList.articles.splice(articleDeleteIndex, 1)
        }
      })
  }
})
export const { resetStateDetail, startEditingPost, cancelEditingPost } = articlesSlice.actions
const articlesReducer = articlesSlice.reducer
export default articlesReducer
