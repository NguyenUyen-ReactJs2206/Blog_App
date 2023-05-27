/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AuthResponse } from 'src/types/auth.type'

interface UserState {
  user: AuthResponse | null
}
const initialState: UserState = {
  user: null
}

// export const postUserLoginThunk = createAsyncThunk('users/login', async (body: any, thunkAPI) => {
//   const response = await loginAccount(body, thunkAPI.signal)
//   console.log(response, 'login')
//   return response.data
// })

const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    addUserRegisterAccount: (state, action: PayloadAction<AuthResponse>) => {
      state.user = action.payload
    }
  }
  // extraReducers(builder) {
  //   builder.addCase('users/login', (state, action: any) => {
  //     state.user = action.payload
  //   })
  // }
})
export const { addUserRegisterAccount } = userSlice.actions
const userReducer = userSlice.reducer
export default userReducer
