import { group } from 'console';
import { link } from 'fs';
import { observer } from 'mobx-react-lite';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Item, Label, Segment } from 'semantic-ui-react';
import { useStore } from '../../../App/stores/useStore';
import ActivityListItem from './ActivityListItem';


export default observer (function ActivityList(){

    const {activityStore} = useStore();
    const { groupedActivities} = activityStore;
    


    
    return (
        <>
            {groupedActivities.map(([group, activities])=> (
                <Fragment>  
                    <Header sub color='teal'>
                {group}
                    </Header>
                {activities.map(activity => (
                    <ActivityListItem key={activity.id} activity={activity}/>

                ))}

                </Fragment>
            ))}
        </>
        
    )
})