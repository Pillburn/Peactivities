import { Card, CardContent, Typography, CardActions, Chip, Button, Box } from "@mui/material"
import { NavLink } from "react-router";

type Props = {
    activity : Activity
}

export default function ActivityCard({activity}:Props) {

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>{activity.title}</Typography>
        <Typography variant="h5" sx={{color: 'text.secondary', mb: 1}}>{activity.date}</Typography>
        <Typography variant="body2">{activity.description}</Typography>
        <Typography variant="h5">{activity.city}</Typography>
        <Typography variant="h5">{activity.venue}</Typography>
        <Typography variant="subtitle1">{activity.latitude}/{activity.longitude}</Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'space-between', pb:2}}>
        <Chip label={activity.category} variant="outlined"/>
        <Box display='flex' gap={3}>
          <Button 
          component={NavLink} to={`/activities/${activity.id}`}
          variant="contained"> Delete</Button>
          <Button 
          component={NavLink} to={`/activities/${activity.id}`} 
          size="medium" 
          variant="contained"> View</Button>
        </Box>
      </CardActions>
    </Card>
  )
}
