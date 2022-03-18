import React, { useState } from 'react';
import '../../App.css';
import state from '../../utils/state';
import { useSnapshot } from 'valtio';
import './Ticketer.css';
import Loader from '../../components/Loader/Loader';
import { api } from '../../utils/api';
import { Box, Button, Select, Text } from '@chakra-ui/react';
import { QrReader } from 'react-qr-reader';
import Header from '../../components/Header/Header';

function Ticketer() {
  const snap = useSnapshot(state);
  var [isLoading, setIsLoading] = useState(false);
  var [ticketType, setTicketType] = useState('');
  var [isQRScannerEnabled, setIsQRScannerEnabled] = useState(false);

  const updateSheet = async (result: any) => {
    setIsLoading(true);
    try {
      const ticketNumber = Number(result.text);
      const data = {
        values: [[ticketNumber, ticketType]],
      };

      let config = {
        headers: {
          Authorization: `Bearer ${snap.loginDetails.accessToken}`,
        },
      };

      await api.put(`/A${ticketNumber}:B${ticketNumber}`, data, config);
      setTicketType('');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const enableQRScanner = () => {
    if (ticketType !== '') {
      setIsQRScannerEnabled(true);
    } else {
      alert('Please select a ticket type');
    }
  };

  return (
    <Box className="Ticketer">
      <Header />
      <Box className="Ticketer-header">
        {snap.loginDetails && !isLoading ? (
          <Box mt={100} mx={10}>
            <Text
              fontFamily={'Montserrat'}
              fontWeight="bold"
              fontSize={'3xl'}
              color={'white'}
            >
              PLEASE SCAN QR CODE
            </Text>

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
              }}
              defaultValue={ticketType}
            >
              <option value="Paid Ticket Entry">Paid Ticket Entry</option>
              <option value="Door Sale Ticket">Door Sale Ticket</option>
              <option value="Takeaway Order">Takeaway Order</option>
            </Select>

            {isQRScannerEnabled ? (
              <QrReader
                onResult={(result, error) => {
                  if (result !== undefined) {
                    state.qrCodeDetails = result;
                    setIsQRScannerEnabled(false);
                    updateSheet(result);
                  }
                }}
                constraints={{
                  width: 800,
                  height: 600,
                  facingMode: 'environment',
                }}
              />
            ) : null}
            {snap.qrCodeDetails ? (
              <Text
                fontFamily={'Montserrat'}
                fontWeight="bold"
                fontSize={'3xl'}
                color={'white'}
                mt={10}
              >
                The Scanned Ticket Number is: {snap.qrCodeDetails.text}
              </Text>
            ) : null}
            <Button
              mt={10}
              onClick={enableQRScanner}
              color={'black'}
              fontFamily={'Montserrat'}
            >
              Scan QR Code
            </Button>
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
