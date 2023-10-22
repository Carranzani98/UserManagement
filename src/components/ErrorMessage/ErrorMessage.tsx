import { Anchor, Text } from '@mantine/core'

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <Text title="Error" color="red" size="sm">
      {message}
      <Anchor onClick={() => location.reload()} size="sm" ml={5}>
        Please try again
      </Anchor>
    </Text>
  )
}

export default ErrorMessage
