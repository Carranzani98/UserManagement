import {
  Button,
  Title,
  Image,
  Paper,
  Text,
  Center,
  Stack,
  Select,
} from '@mantine/core'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import QredLogo from '../../assets/Qred-logo.png'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Loader from '../../components/Loader/Loader'
import { fetchUsers } from '../../redux/actions/usersActions'
import { AppDispatch, RootState } from '../../redux/store'
import { User } from '../../types/types'

const Landing = () => {
  const dispatch: AppDispatch = useDispatch()
  const {
    data: users,
    status,
    error,
  } = useSelector((state: RootState) => state.users)

  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers())
    }
  }, [status, dispatch])

  if (status === 'loading') {
    return <Loader />
  }

  return (
    <Center h="100vh">
      <Paper
        p={56}
        withBorder
        shadow="sm"
        w={390}
        component={Stack}
        align="center"
        gap="lg"
        radius="md"
        bg="#F5F5F4"
      >
        <Image w={100} src={QredLogo} />
        <Title fw={500} c="#2B4647">
          Welcome
        </Title>
        <Text c="gray">Select a user to view the profile</Text>
        <Select
          placeholder="Select or search"
          searchable
          radius="md"
          data={users.map((user: User) => ({
            value: user.id.toString(),
            label: user.name,
          }))}
          onChange={setUserId}
          w="100%"
          disabled={status === 'failed'}
        />
        {status === 'rejected' && error && (
          <ErrorMessage message="Failed to load users data." />
        )}
        <Link to={`/profile/${userId}`}>
          <Button color="qredColor.4" radius="xl" w={120}>
            View Profile
          </Button>
        </Link>
      </Paper>
    </Center>
  )
}

export default Landing
