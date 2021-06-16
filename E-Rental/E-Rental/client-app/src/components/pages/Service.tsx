import react, { useEffect } from 'react';
import '../../App/Layout/App.css';
import LoadingComponent from '../../App/Layout/LoadingComponent';
import { useStore } from '../../App/stores/useStore';
import { observer } from 'mobx-react-lite';
import React from 'react';
import ActivityDashboard from '../../Features/activities/Dashboard/ActivityDashboard';
import { Container } from 'semantic-ui-react';



function Service () {
    const {activityStore} = useStore();


  useEffect(() =>{
      activityStore.loadActivities();
  }, [activityStore])




  if(activityStore.loadingInitial) return <LoadingComponent content='Loading app' />
    return (
        <>
        <div>
        <Container />
        </div>
        </>
    )
    
}

export default Service;