import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton startColor="#1f1f1f" endColor="#2d2d2d" height="200px" />
      <CardBody>
        <SkeletonText startColor="#1f1f1f" endColor="#2d2d2d" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
