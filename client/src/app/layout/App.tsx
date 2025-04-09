import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import Navbar from "./Navbar";
import ActivityDashboard from "../../feature/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  
  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
    .then(response => setActivities(response.data))

    return () => {}
  }, [])
  const handleSelectActivity = (id:string) => {
    setSelectedActivity(activities.find(x => x.id === id))
  }

  const handleCancelSelectActivity= () => {
    setSelectedActivity(undefined)
  }
  return (
    <Box sx={{bgcolor: '#eeeeee'}}>
    <CssBaseline/>
    <Navbar/>
    <Container maxWidth='xl' sx={{mt: 3}}>
      <ActivityDashboard 
      activities = {activities}
      selectActivity = {handleSelectActivity}
      cancelSelectActivity = {handleCancelSelectActivity}
      selectedActivity={selectActivity}/>
    </Container>
    </Box>
      
  )
}
export default App
