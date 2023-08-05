/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProfile, updateProfile } from 'src/apis/profiles.api'
import { AuthResponse } from 'src/types/auth.type'
import { UserSetting } from 'src/types/user.type'

interface UserState {
  user: AuthResponse | null
  profile: AuthResponse | null
}
const initialState: UserState = {
  user: null,
  profile: null
}

// export const postUserLoginThunk = createAsyncThunk('users/login', async (body: any, thunkAPI) => {
//   const response = await loginAccount(body, thunkAPI.signal)
//   console.log(response, 'login')
//   return response.data
// })
export const getProfileThunk = createAsyncThunk('user/getProfile', async (_, thunkAPI) => {
  const response = await getProfile(thunkAPI.signal)

  return response.data
})
// export const getProfileThunk = createAsyncThunk('user/getProfile', async (params: any, thunkAPI) => {
//   const response = await getProfile(params, thunkAPI.signal)
//   return response.data
// })
export const updateProfileThunk = createAsyncThunk('user/updateProfile', async (body: any, thunkAPI) => {
  const response = await updateProfile(body, thunkAPI.signal)
  console.log(response, 'rrrrrrrrrrrrrrrrrrrrrrrrr')
  return response.data
})

const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    addUserRegisterAccount: (state, action: PayloadAction<AuthResponse>) => {
      state.user = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(getProfileThunk.fulfilled, (state, action: any) => {
      console.log(action.payload)
      state.profile = action.payload
    }),
      builder.addCase(updateProfileThunk.fulfilled, (state, action: any) => {
        state.profile = action.payload
      })
  }
})
export const { addUserRegisterAccount } = userSlice.actions
const userReducer = userSlice.reducer
export default userReducer
