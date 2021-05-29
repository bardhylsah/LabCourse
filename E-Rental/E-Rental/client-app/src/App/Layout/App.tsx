import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { collapseTextChangeRangesAcrossMultipleVersions, setConstantValue } from 'typescript';
import { Header, List } from 'semantic-ui-react';
import {Activity} from '../Models/Activity'; 

function App() {
  const[activities, setActivities] = useState<Activity[]>([]);

  useEffect(() =>{
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response =>{
      
      setActivities(response.data);
    })
  }, [])
  return (
    <div >
      <Header as= 'h2' icon='users' content='Rental'/>
      
      <List>
      {activities.map(activity  =>(
            <List.Item key={activity.id}>
                {activity.title}
     
    </List.Item>
      ))}
       </List>
    </div>
  );
}

export default App;
