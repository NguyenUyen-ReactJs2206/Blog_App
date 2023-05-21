import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import articlesReducer from './useslice/articles.slice'
import { useDispatch } from 'react-redux'
import userReducer from './useslice/user.slice'
// ...

export const store = configureStore({
  reducer: { articlesReducer: articlesReducer, userReducer: userReducer }
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
//When dispatch AsyncThunk
export const useAppDispatch = () => useDispatch<AppDispatch>()
