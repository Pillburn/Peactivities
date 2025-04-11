import { Group } from "@mui/icons-material";
import { AppBar, Box, Button, Container, MenuItem, Toolbar, Typography } from "@mui/material";

type Props = {
  openForm: () => void
}

export default function Navbar({openForm}: Props) {
  return (
    <Box sx ={{flexGrow : 1}}>
      <AppBar position="static" sx={{
        backgroundImage: 'linear-gradient(120deg,rgb(114, 139, 114) 12%, #53a653 30%, #2e662e 60%)'}
        }>
        <Container maxWidth='xl'> 
            <Toolbar sx={{display:'flex', justifyContent: 'space-between'}}>
                <Box>
                    <MenuItem >
                        <Group fontSize="large"/>
                        <Typography variant="h4" fontWeight='bold'>
                            PeActivities
                        </Typography>
                    </MenuItem>
                </Box>
                <Box sx={{display:'flex'}}>
                    <MenuItem sx={{fontSize: '1.2rem', textTransform: 'uppercase', fontWeight:'bold'}}>
                    Activities
                    </MenuItem>
                    <MenuItem sx={{fontSize: '1.2rem', textTransform: 'uppercase', fontWeight:'bold'}}>
                    About
                    </MenuItem>
                    <MenuItem sx={{fontSize: '1.2rem', textTransform: 'uppercase', fontWeight:'bold'}}>
                    Contact
                    </MenuItem>
                </Box>
                <Button onClick={() => openForm()} size="large" variant="contained" color="warning">Create Activity</Button>
            </Toolbar>
        </Container>
       
      </AppBar>
    </Box>
  )
}
