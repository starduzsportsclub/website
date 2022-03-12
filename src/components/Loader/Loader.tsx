import { Spinner } from '@chakra-ui/react';
import React from 'react';
import './Loader.css';

type Props = {};

const Loader: React.FC<Props> = () => {
  return (
    <div className="loader-container">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  );
};

export default Loader;
