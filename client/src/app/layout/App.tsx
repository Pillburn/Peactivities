import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import Navbar from "./Navbar";
import ActivityDashboard from "../../feature/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  
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

  const handleOpenForm = (id? :string) => {
    if (id) handleSelectActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

  const handleFormSubmit = (activity: Activity) => {
    if(activity.id) {
      setActivities(activities.map(x => x.id === activity.id? activity: x))
    }else{
      const newActivity = {...activity,id: activities.length.toString()}
      setSelectedActivity(newActivity)
      setActivities([...activities,newActivity])
    }
    setEditMode(false);
  }

  const handleDeleteForm = (id:string) => {
    setActivities(activities.filter(x => x.id !== id))
    setSelectedActivity(undefined)
  }
  return (
    <Box sx={{bgcolor: '#eeeeee'}}>
    <CssBaseline/>
    <Navbar 
      openForm = {handleOpenForm}
    />
    <Container maxWidth='xl' sx={{mt: 3}}>
      <ActivityDashboard 
      activities = {activities}
      selectActivity = {handleSelectActivity}
      cancelSelectActivity = {handleCancelSelectActivity}
      selectedActivity={selectActivity}
      editMode = {editMode}
      openForm = {handleOpenForm}
      closeForm = {handleFormClose}
      submitForm = {handleFormSubmit}
      deleteForm = {handleDeleteForm}/>
    </Container>
    </Box>
      
  )
}
export default App
