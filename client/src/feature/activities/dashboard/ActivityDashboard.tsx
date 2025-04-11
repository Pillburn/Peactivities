import { Grid} from "@mui/material";
import ActivityDetails from "../details/ActivityDetails";
import Activitylist from "./ActivityList";
import ActivityForm from "../form/ActivityForm";

type Props = {
    activities: Activity[]
    selectedActivity?: Activity;
    editMode: boolean;
    selectActivity: (id:string) => void;
    cancelSelectActivity: () => void;
    openForm: (id?:string) => void;
    submitForm: (activity: Activity)=> void;
    closeForm: () => void;
    deleteForm: (id:string) => void;
}

export default function ActivityDashboard({activities, cancelSelectActivity, selectActivity,selectedActivity,openForm,closeForm,submitForm,deleteForm,editMode}: Props) {
  return (
    <Grid container spacing={3} sx={{display:'flex'}}>
      <Grid size={7}>
        <Activitylist 
        activities={activities}
        selectActivity={selectActivity}
        deleteForm={deleteForm}
        />
      </Grid>
      <Grid size={5}>
        {selectedActivity && !editMode &&
            <ActivityDetails 
              activity={selectedActivity}
              cancelSelectActivity = {cancelSelectActivity}
              openForm= {openForm}
            />
        }
        {editMode && <ActivityForm
                      closeForm={closeForm}   
                      activity={selectedActivity}
                      submitForm={submitForm}
                      />}
      </Grid>
    </Grid>
  )
}

