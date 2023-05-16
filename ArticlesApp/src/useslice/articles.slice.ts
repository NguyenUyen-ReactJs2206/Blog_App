import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const articlesSlice = createSlice({
  name: 'articles',
  initialState: initialState,
  reducers: {}
})

const articlesReducer = articlesSlice.reducer
export default articlesReducer
