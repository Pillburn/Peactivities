import { Grid} from "@mui/material";
import Activitylist from "./ActivityList";

export default function ActivityDashboard() {
  
  return (
    <Grid container spacing={3} sx={{display:'flex'}}>
      <Grid size={7}>
        <Activitylist />
      </Grid>
      <Grid size={5}>
        Activity Filters Here
      </Grid>
    </Grid>
  )
}

