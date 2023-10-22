import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { updateUser } from '../redux/actions/userActions'
import { AppDispatch } from '../redux/store'
import { User } from '../types/types'
import { validateEmail, validatePhone } from '../utils/validations'

const useHandleSubmit = (user: User | null) => {
  const dispatch: AppDispatch = useDispatch()
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({})

  const handleSubmit = () => {
    if (!user) return

    let validationErrors = {}

    if (!validateEmail(user.email)) {
      validationErrors = {
        ...validationErrors,
        email: 'Please type in a valid email address.',
      }
    }

    if (!validatePhone(user.phone)) {
      validationErrors = {
        ...validationErrors,
        phone: 'Please type in a valid phone number.',
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    dispatch(updateUser(user))
  }

  return { handleSubmit, setErrors, errors }
}

export default useHandleSubmit
