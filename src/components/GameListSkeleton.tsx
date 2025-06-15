import { HStack, Skeleton, Stack } from "@chakra-ui/react"

const GameListSkeleton = () => {
  return (
    <HStack gap="2" paddingY={1} mt="11px">
      <Skeleton width="32px" height="32px" borderRadius="8px"/>
      <Stack flex="1">
        <Skeleton width="28" height="8" borderRadius="2px"/>
      </Stack>
    </HStack>
  )
}

export default GameListSkeleton