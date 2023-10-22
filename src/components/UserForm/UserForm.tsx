import { Button, Paper, Stack } from '@mantine/core'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'
import { User } from '../../types/types'
import Input from '../Input/Input'

interface UserFormProps {
  user: User | null
  errors: { email?: string; phone?: string }
  setUser: (user: User | null) => void
  setErrors: ({ email, phone }: { email?: string; phone?: string }) => void
  onSubmitForm: () => void
}
const UserForm = ({
  user,
  errors,
  setUser,
  setErrors,
  onSubmitForm,
}: UserFormProps) => {
  const { status } = useSelector((state: RootState) => state.user)
  return (
    <Paper
      p="sm"
      withBorder
      shadow="sm"
      w={300}
      component={Stack}
      align="center"
      gap="xs"
      radius="lg"
    >
      <Input
        label="Street Name"
        value={user?.address.street}
        disabled={!user}
        onChange={value =>
          user &&
          setUser({ ...user, address: { ...user.address, street: value } })
        }
      />
      <Input
        label="Postal Code"
        value={user?.address.zipcode}
        disabled={!user}
        onChange={value =>
          user &&
          setUser({ ...user, address: { ...user.address, zipcode: value } })
        }
      />
      <Input
        label="City"
        value={user?.address.city}
        disabled={!user}
        onChange={value =>
          user &&
          setUser({ ...user, address: { ...user.address, city: value } })
        }
      />
      <Input
        label="Email"
        value={user?.email}
        disabled={!user}
        onChange={value => {
          user && setUser({ ...user, email: value })
          setErrors({})
        }}
        error={errors.email}
      />
      <Input
        label="Phone"
        value={user?.phone}
        disabled={!user}
        onChange={value => {
          user && setUser({ ...user, phone: value })
          setErrors({})
        }}
        error={errors.phone}
      />
      <Button
        mt="lg"
        type="submit"
        color="qredColor.4"
        radius="xl"
        onClick={onSubmitForm}
        fullWidth
        loading={status === 'updating'}
      >
        Save Changes
      </Button>
    </Paper>
  )
}

export default UserForm
