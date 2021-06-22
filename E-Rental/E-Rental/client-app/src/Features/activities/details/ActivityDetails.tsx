import { observer } from 'mobx-react-lite';
import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';
import LoadingComponent from '../../../App/Layout/LoadingComponent';
import { useStore } from '../../../App/stores/useStore';


export default observer (function ActivityDetails() {
    const{activityStore} = useStore();
    const{selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
    const{id}= useParams<{id: string}>();

    useEffect(()=>{
        if(id) loadActivity(id);
    }, [id, loadActivity]);
    if(loadingInitial || !activity) return <LoadingComponent/>;

    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/AUDI-A3-2020-Hatchback.jpg`}  />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button  basic color='blue' content='Edit' />
                    <Button  basic color='blue' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    ) 
})