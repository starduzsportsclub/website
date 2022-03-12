import React, { useState } from 'react';
import '../../App.css';
import state from '../../utils/state';
import { useSnapshot } from 'valtio';
import './Ticketer.css';
import Loader from '../../components/Loader/Loader';
import { api } from '../../utils/api';
import { Box, Button, Select, Text } from '@chakra-ui/react';

function Ticketer() {
  const snap = useSnapshot(state);
  var [isLoading, setIsLoading] = useState(false);
  var [ticketType, setTicketType] = useState('');
  var [ticketNumber, setTicketNumber] = useState(0);

  const updateSheet = async () => {
    setIsLoading(true);
    const data = {
      values: [[ticketNumber, ticketType]],
    };

    let config = {
      headers: {
        Authorization: `Bearer ${snap.loginDetails.accessToken}`,
      },
    };

    try {
      await api.put(`/A${ticketNumber}:B${ticketNumber}`, data, config);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
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
            <Button
              mt={100}
              onClick={updateSheet}
              color={'black'}
              fontFamily={'Montserrat'}
            >
              Scan QR Code
            </Button>
            <Select
              placeholder="Select ticket option"
              size="lg"
              color={'white'}
              mt={10}
              fontWeight="bold"
              fontFamily={'Montserrat'}
              borderWidth={'3px'}
              onChange={(e) => {
                setTicketType(e.target.value);
                setTicketNumber(9);
              }}
            >
              <option value="Paid Ticket Entry">Paid Ticket Entry</option>
              <option value="Door Sale Ticket">Door Sale Ticket</option>
              <option value="Takeaway Order">Takeaway Order</option>
            </Select>
          </Box>
        ) : isLoading ? (
          <Loader />
        ) : (
          <Text
            fontFamily={'Montserrat'}
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
