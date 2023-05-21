/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AuthResponse } from 'src/types/auth.type'

interface UserState {
  user: AuthResponse | null
}
const initialState: UserState = {
  user: null
}

const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    addUserRegisterAccount: (state, action: PayloadAction<AuthResponse>) => {
      state.user = action.payload
    }
  }

  // Xu ly trong extraReducer de khong co generate ra action
  //   extraReducers(buider) {
  //     buider.addCase('user/getUserSuccess', (state, action: any) => {
  //       state.user = action.payload
  //     })
  //   }
})
export const { addUserRegisterAccount } = userSlice.actions
const userReducer = userSlice.reducer
export default userReducer
