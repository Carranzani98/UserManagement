import { createSlice } from '@reduxjs/toolkit'

import { User } from '../../types/types'
import { fetchUserById, updateUser } from '../actions/userActions'
import { RootState } from '../store'

interface UserState {
  data: User | null
  status: string | null
  error: string | null
}

const initialState: UserState = {
  data: null,
  status: null,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUserById.pending, state => {
        state.status = 'pending'
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.error = null
        state.data = action.payload
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message || null
      })
      .addCase(updateUser.pending, state => {
        state.status = 'updating'
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = 'updated'
        state.error = null
        state.data = action.payload
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'update_rejected'
        state.error = action.error.message || null
      })
  },
})

export const selectUserError = (state: RootState) => state.users.error

export default userSlice.reducer
