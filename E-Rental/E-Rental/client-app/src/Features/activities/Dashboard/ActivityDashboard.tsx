import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid} from 'semantic-ui-react';
import { useStore } from '../../../App/store/useStore';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';
import LoadingComponent from '../../../App/Layout/LoadingComponent';
import ActivityFilters from './ActivityFilters';


export default observer (function ActivityDashboard() {

    const {activityStore} = useStore();
    const {selectedActivity, editMode} = activityStore;
    const{loadActivities, activityRegistry}=activityStore;


  useEffect(() =>{
      if(activityRegistry.size ==0) loadActivities();
  }, [activityRegistry.size, loadActivities])


  if(activityStore.loadingInitial) return <LoadingComponent content='Loading cars...' />

    

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList /> 
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityFilters/>
            </Grid.Column>
        </Grid>
    )
})