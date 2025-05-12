import { Group } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <Paper
    sx={{
      color: 'white',
      display:'flex',
      flexDirection:'column',
      gap:6,
      alignItems:'center',
      alignContent:'center',
      justifyContent:'center',
      height: '100vh',
      backgroundImage: 'linear-gradient(120deg,rgb(114, 139, 114) 12%, #53a653 30%, #2e662e 60%)'
    }}
    >
      <Box sx={{
        display:'flex',alignItems:'center', alignContent: 'center',
        color:'white',gap:3}}
      >
        <Group sx={{height: 110, width: 110}}/>
        <Typography variant="h1">
          North Coast Tours
        </Typography>
      </Box>
      <Typography variant="h2">
        Belfast Tour Company
      </Typography>
      <Button
          component={Link}
          to='/activities'
          size="large"
          variant="contained"
          sx={{height: 80, borderRadius: 4, fontSize: '1.5rem'}}
          >
          Bring me out to the Causeway
      </Button>
      
    </Paper>
  )
}