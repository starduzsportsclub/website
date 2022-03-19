import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
  Avatar,
  MenuGroup,
  MenuDivider,
  IconButton,
} from '@chakra-ui/react';
import state from '../../utils/state';
import { useSnapshot } from 'valtio';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import { HamburgerIcon } from '@chakra-ui/icons';
// import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const snap = useSnapshot(state);
  // const navigate = useNavigate();

  const responseGoogle = (response: any) => {
    if (response.error) {
      console.log(response.error);
    } else {
      state.loginDetails = response;
    }
  };

  const logout = () => {
    state.loginDetails = null;
  };

  return (
    <Flex zIndex={20}>
      <Flex position="fixed" top="1.3rem" right="1rem" align="center">
        {snap.loginDetails ? (
          <Menu>
            <MenuButton>
              <Center>
                <Avatar
                  w={10}
                  h={10}
                  bg={'gray.100'}
                  color={'black'}
                  name={`${snap.loginDetails.profileObj.givenName} ${snap.loginDetails.profileObj.familyName}`}
                />
              </Center>
            </MenuButton>
            <MenuList>
              <MenuGroup
                fontWeight={'normal'}
                title={`Signed in as ${snap.loginDetails.profileObj.givenName} ${snap.loginDetails.profileObj.familyName}`}
              ></MenuGroup>

              <MenuDivider />
              {/* <MenuItem onClick={() => navigate('/ticketer')}>
                Navigate to Ticketer
              </MenuItem> */}
              <GoogleLogout
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Logout"
                render={(renderProps) => (
                  <MenuItem
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Sign out
                  </MenuItem>
                )}
                onLogoutSuccess={logout}
              ></GoogleLogout>
            </MenuList>
          </Menu>
        ) : (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
            />
            <MenuList>
              <GoogleLogin
                clientId="421009146571-9fceck9of1r85b0gqtod0imj73n0kssm.apps.googleusercontent.com"
                buttonText="Login"
                isSignedIn={true}
                render={(renderProps) => (
                  <MenuItem
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Login with Google
                  </MenuItem>
                )}
                scope="https://www.googleapis.com/auth/spreadsheets"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
