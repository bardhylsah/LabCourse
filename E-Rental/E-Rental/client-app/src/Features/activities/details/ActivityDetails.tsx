 import { observer } from 'mobx-react-lite';
import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Grid, GridColumn, Image } from 'semantic-ui-react';
import LoadingComponent from '../../../App/Layout/LoadingComponent';
import { useStore } from '../../../App/stores/useStore';
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetaledHeader from './ActivityDetaledHeader';
import ActivityDetailedInfo from './ActivityDetailedInfo';


export default observer (function ActivityDetails() {
    const{activityStore} = useStore();
    const{selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
    const{id}= useParams<{id: string}>();

    useEffect(()=>{
        if(id) loadActivity(id);    
    }, [id, loadActivity]);
    if(loadingInitial || !activity) return <LoadingComponent/>;

    return (
       <Grid>
           <Grid.Column width={10}>
               < ActivityDetaledHeader activity={activity}/>
               <ActivityDetailedInfo activity={activity}/>
               <ActivityDetailedChat/>
            </Grid.Column>
       </Grid>
    ) 
})