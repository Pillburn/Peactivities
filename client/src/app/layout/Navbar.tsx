import { Group } from "@mui/icons-material";
import { AppBar, Box, Container, LinearProgress, MenuItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";
import { Observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/useStore";
import { useAccount } from "../../lib/hooks/useAccount";
import UserMenu from "./UserMenu";
import { useEffect, useState } from "react";


export default function Navbar() {
  const [debouncedisLoading, setDebouncedIsLoading] = useState(false);
  const {uiStore} = useStore();
  const {currentUser} = useAccount();

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedIsLoading(uiStore.isLoading), 300);
    return () => clearTimeout(timer);
  }, [uiStore.isLoading]);

  return (
    <Box sx ={{flexGrow : 1}}>
      <AppBar position="static" sx={{
        backgroundImage: 'linear-gradient(120deg,rgb(114, 139, 114) 12%, #53a653 30%, #2e662e 60%)',
        position:'relative'
      }
        }>
        <Container maxWidth='xl'> 
            <Toolbar sx={{display:'flex', justifyContent: 'space-between'}}>
                <Box>
                    <MenuItem component={NavLink} to='/'>
                        <Group fontSize="large"/>
                        <Typography variant="h4" fontWeight='bold'>
                             Belfast Bus Tours
                        </Typography>
                    </MenuItem>
                </Box>
                <Box sx={{display:'flex'}}>
                    <MenuItemLink to='/activities'>
                    Tours
                    </MenuItemLink>
                    <MenuItemLink to='/about'>
                    Airport Transfers
                    </MenuItemLink>
                    <MenuItemLink to='/counter'>
                    Contact Us
                    </MenuItemLink>
                    <MenuItemLink to='/errors'>
                    Test Errors
                    </MenuItemLink>
                </Box>
                <Box display={'flex'} alignItems='center'> 
                  {currentUser ? (
                    <UserMenu/>
                  ) : (
                    <>
                      <MenuItemLink to='/login'>Login</MenuItemLink>
                      <MenuItemLink to='/register'>Register</MenuItemLink>
                    </>
                  ) }
                </Box>
            </Toolbar>
        </Container>
          <Observer>
            {() => debouncedisLoading ? (
              <LinearProgress
              color="secondary"
              sx={{position:'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 4
              }}
              />
              ) : null}
        </Observer>
      </AppBar>
    </Box>
  )
}
