import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


const GameCardSkeleton = () => {
  return (
  <Card width='200px'>
        <Skeleton borderRadius={10} overflow='hidden' height='200px'/>
        <CardBody>
            <SkeletonText />
        </CardBody>
  </Card>
  )
}

export default GameCardSkeleton