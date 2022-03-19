import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import { Box, Divider, Image, Text } from '@chakra-ui/react';
import Ticketer from '../Ticketer/Ticketer';
import { useSnapshot } from 'valtio';
import state from '../../utils/state';

function Home() {
  const snap = useSnapshot(state);
  return (
    <Box className="Home">
      <Box mt={100} className="Home-logo">
        <Image src={logo} alt="logo" />
      </Box>
      {!snap.loginDetails ? (
        <Box className="Home-header">
          <Box textAlign={'start'} margin={50}>
            <Text fontFamily={'Montserrat'} fontWeight="bold" fontSize={'3xl'}>
              ABOUT US
            </Text>
            <Text
              fontFamily={'Montserrat'}
              fontWeight="medium"
              fontSize={'2xl'}
            >
              Starduz Sports Club is built on the foundation of the 3 S’s -
              Service, Sports and Social. These 3 pillars provide a cohesive
              vision and define who we are as a club. Members all share this
              common belief and are made up of people within our community.
            </Text>
            <Divider w={'20%'} borderWidth={5} my={5} borderColor="red" />
            <Text fontFamily={'Montserrat'} fontWeight="bold" fontSize={'3xl'}>
              SPORTS
            </Text>
            <Text
              fontFamily={'Montserrat'}
              fontWeight="medium"
              fontSize={'2xl'}
            >
              The club participates in sporting activities as well as organizing
              sports related events. The aim of this, aside from being active,
              is to encourage participation and bringing unity amongst members.
            </Text>
            <Text
              fontFamily={'Montserrat'}
              fontWeight="bold"
              fontSize={'3xl'}
              mt={5}
            >
              SERVICE
            </Text>
            <Text
              fontFamily={'Montserrat'}
              fontWeight="medium"
              fontSize={'2xl'}
            >
              The club has a passion to serve the community especially where the
              need is. Each year it carries out activities for the benefit of
              those facing hardship. Year on year, the services provided by
              Starduz has had positive impact on the community.
            </Text>
            <Text
              mt={5}
              fontFamily={'Montserrat'}
              fontWeight="bold"
              fontSize={'3xl'}
            >
              SOCIAL
            </Text>
            <Text
              fontFamily={'Montserrat'}
              fontWeight="medium"
              fontSize={'2xl'}
            >
              Being involved in our community is all about building
              relationships and the local events we run are a great way to get
              everyone together. This helps mental well-being and brings members
              of the community closer together.
            </Text>
          </Box>
        </Box>
      ) : (
        <Ticketer />
      )}
    </Box>
  );
}

export default Home;
