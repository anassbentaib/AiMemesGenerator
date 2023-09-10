import { Box, SkeletonCircle, SkeletonText, Spinner } from '@chakra-ui/react';
import React from 'react';

const Loader = () => (
<Box  width='100%'>
  <SkeletonCircle size='70px' />
  <SkeletonText mt='9' noOfLines={5} spacing='7' skeletonHeight='3' />
</Box>);

export default Loader;
