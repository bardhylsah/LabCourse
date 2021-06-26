import React, { SyntheticEvent } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, ItemDescription, Label, Segment } from 'semantic-ui-react';
import { useStore } from "../../../App/stores/useStore";
import {Activity} from "../../../App/Models/Activity";

interface Props{
    activity: Activity
}


export default function ActivityListItem({activity}: Props){
    const {activityStore} = useStore();
    const {deleteActivity, loading} = activityStore;
    
    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string){
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }
    return (
       <Segment.Group>
           <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/categoryImages/car.png'/>
                        <Item.Content>
                            <Item.Header as ={Link} to={'/services/${activity.id}'}>
                                {activity.title}
                            </Item.Header>
                            <Item.Description>Reserved</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
           </Segment>
           <Segment secondary>
               Attendees go here
           </Segment>
           <Segment clearing>
                <span>{activity.description}</span>
                <Button
                    as={Link}
                    to={'/services/${activity.id}'}
                    color='teal'
                    floated='right'
                    content='View' 
                ></Button>
           </Segment>
       </Segment.Group>
    )
}