import { Center, Loader as MantineLoader } from '@mantine/core'

const Loader = () => {
  return (
    <Center h="100vh">
      <MantineLoader size="xl" color="qredColor.7" />
    </Center>
  )
}

export default Loader
