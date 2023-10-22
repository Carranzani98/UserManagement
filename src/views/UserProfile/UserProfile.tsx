import { Stack, Image, Center, Paper, Anchor, Text } from '@mantine/core'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './UserProfile.css'
import QredLogo from '../../assets/Qred-logo.png'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Loader from '../../components/Loader/Loader'
import UserForm from '../../components/UserForm/UserForm'
import useFetchUser from '../../hooks/useFetchUser'
import useHandleSubmit from '../../hooks/useHandleSubmit'
import { User } from '../../types/types'

const UserProfile = () => {
  const { userId } = useParams<{ userId: string }>()

  const [user, setUser] = useState<User | null>(null)

  const { user: selectedUser, status, error } = useFetchUser(userId)

  const { handleSubmit, setErrors, errors } = useHandleSubmit(user)

  useEffect(() => {
    setUser(selectedUser)
  }, [selectedUser])

  if (status === 'pending') return <Loader />

  return (
    <Center h="100vh">
      <Paper
        px={56}
        py="xl"
        withBorder
        shadow="sm"
        w={390}
        component={Stack}
        align="center"
        gap="xs"
        radius="md"
        bg="#F5F5F4"
      >
        <Anchor href="/" className="back-anchor"></Anchor>
        <Image w={80} src={QredLogo} />

        <Text fw={500} mb="md" size="24px" c="#2B4647">
          Edit your profile
        </Text>
        {status === 'rejected' && error && (
          <ErrorMessage message="Failed to load user data." />
        )}
        <div>
          <UserForm
            user={user}
            errors={errors}
            setUser={setUser}
            setErrors={setErrors}
            onSubmitForm={handleSubmit}
          />
          {status === 'updated' && (
            <Text size="sm" c="qredColor.8" ta="center" mt="8">
              Profile updated successfully
            </Text>
          )}
          {status === 'update_rejected' && (
            <Text size="sm" c="red" ta="center" mt="8">
              Something went wrong when saving
            </Text>
          )}
        </div>
      </Paper>
    </Center>
  )
}

export default UserProfile
