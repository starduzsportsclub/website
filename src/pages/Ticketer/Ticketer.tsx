import React, { useState } from 'react';
import '../../App.css';
import state from '../../utils/state';
import { useSnapshot } from 'valtio';
import './Ticketer.css';
import { useSearchParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { api } from '../../utils/api';
import { Box, Button, Text } from '@chakra-ui/react';

function Ticketer() {
  const snap = useSnapshot(state);
  var [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const student_id = searchParams.get('student_id');

  const updateSheet = async () => {
    setIsLoading(true);
    const data = { bookId: 'test', studentId: student_id };
    await api.post('/lessons', data);
    setIsLoading(false);
  };

  return (
    <Box className="Ticketer">
      <Box className="Ticketer-header">
        {snap.loginDetails && !isLoading ? (
          <Box mt={100}>
            <Text
              fontFamily={'Montserrat'}
              fontWeight="bold"
              fontSize={'3xl'}
              color={'white'}
            >
              PLEASE SCAN QR CODE
            </Text>
            <Button mt={100} onClick={updateSheet} color={'black'}>
              Scan QR Code
            </Button>
          </Box>
        ) : student_id ? (
          <Loader />
        ) : (
          <Text
            fontSize="4xl"
            fontWeight={'bold'}
            className="TicketerTitle"
            color={'white'}
            mt={100}
          >
            Please login
          </Text>
        )}
      </Box>
    </Box>
  );
}

export default Ticketer;
