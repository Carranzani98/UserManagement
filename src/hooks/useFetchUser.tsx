import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUserById } from '../redux/actions/userActions'
import { AppDispatch, RootState } from '../redux/store'

const useFetchUser = (userId: string | undefined) => {
  const dispatch: AppDispatch = useDispatch()
  const {
    data: user,
    status,
    error,
  } = useSelector((state: RootState) => state.user)

  useEffect(() => {
    dispatch(fetchUserById(Number(userId)))
  }, [dispatch, userId])

  return { user, status, error }
}

export default useFetchUser
