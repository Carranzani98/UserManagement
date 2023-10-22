import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { User } from '../../types/types'

export const fetchUserById = createAsyncThunk(
  'users/fetchUserById',
  async (userId: number) => {
    const response = await axios.get<User>(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    )
    return response.data
  },
)

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (user: User) => {
    const response = await axios.put<User>(
      `https://jsonplaceholder.typicode.com/users/${user.id}`,
      user,
    )
    return response.data
  },
)
