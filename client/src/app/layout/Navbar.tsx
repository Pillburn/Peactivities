import { Group } from "@mui/icons-material";
import { AppBar, Box, Button, Container, LinearProgress, MenuItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";
import { Observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/useStore";


export default function Navbar() {
  const {uiStore} = useStore();
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
                            PeActivities
                        </Typography>
                    </MenuItem>
                </Box>
                <Box sx={{display:'flex'}}>
                    <MenuItemLink to='/activities'>
                    Activities
                    </MenuItemLink>
                    <MenuItemLink to='/about'>
                    About
                    </MenuItemLink>
                    <MenuItemLink to='/createActivity'>
                    Create Activity
                    </MenuItemLink>
                    <MenuItemLink to='/counter'>
                    Counter
                    </MenuItemLink>
                </Box>
                <Button onClick={() => {}} size="large" variant="contained" color="warning">Create Activity</Button>
            </Toolbar>
        </Container>
          <Observer>
            {() => uiStore.isLoading ? (
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
