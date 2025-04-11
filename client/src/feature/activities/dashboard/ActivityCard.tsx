import { Card, CardContent, Typography, CardActions, Chip, Button, Box } from "@mui/material"

type Props = {
    activity : Activity
    selectActivity: (id:string) => void;
    deleteForm: (id:string) => void;
}

export default function ActivityCard({activity, selectActivity,deleteForm: deleteActivity}:Props) {
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
          <Button onClick={() => deleteActivity(activity.id)} color="error" size="medium" variant="contained"> Delete</Button>
          <Button onClick={() => selectActivity(activity.id)} size="medium" variant="contained"> View</Button>
        </Box>
      </CardActions>
    </Card>
  )
}
