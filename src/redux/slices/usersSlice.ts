import { createSlice } from '@reduxjs/toolkit'

import { User } from '../../types/types'
import { fetchUsers } from '../actions/usersActions'
import { RootState } from '../store'

interface UsersState {
  data: User[]
  status: string | null
  error: string | null
}

const initialState: UsersState = { data: [], status: 'idle', error: null }

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.status = 'pending'
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.error = null
        state.data = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message || null
      })
  },
})

export const selectUserError = (state: RootState) => state.users.error

export default usersSlice.reducer
