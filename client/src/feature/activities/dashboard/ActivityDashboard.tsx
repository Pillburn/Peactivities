import { Grid} from "@mui/material";
import ActivityDetails from "../details/ActivityDetails";
import Activitylist from "./ActivityList";

type Props = {
    activities: Activity[]
    selectActivity: (id:string) => void;
    cancelSelectActivity: () => void;
    selectedActivity?: Activity;
}

export default function ActivityDashboard({activities, cancelSelectActivity, selectActivity,selectedActivity}: Props) {
  return (
    <Grid container spacing={3} sx={{display:'flex'}}>
      <Grid size={7}>
        <Activitylist 
        activities={activities}
        selectActivity={selectActivity}
        />
      </Grid>
      <Grid size={5}>
        {selectedActivity && <ActivityDetails 
          activity={selectedActivity}
          cancelSelectActivity = {cancelSelectActivity}
         />
        }
      </Grid>
    </Grid>
  )
}

