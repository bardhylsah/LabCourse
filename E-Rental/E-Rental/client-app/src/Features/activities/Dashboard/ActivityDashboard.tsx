import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid} from 'semantic-ui-react';
import { useStore } from '../../../App/stores/useStore';
import ActivityList from './ActivityList';
import LoadingComponent from '../../../App/Layout/LoadingComponent';
import ActivityStore from '../../../App/stores/activityStore';


export default observer (function ActivityDashboard() {
    const {activityStore}= useStore();
    

  useEffect(() =>{
      activityStore.loadActivities();
  }, [activityStore])




  if(activityStore.loadingInitial) return <LoadingComponent content='Loading app' />

    

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList /> 
            </Grid.Column>
            <Grid.Column width='6'>
               <h2>Activity Filters</h2>
            </Grid.Column>
        </Grid>
    )
})