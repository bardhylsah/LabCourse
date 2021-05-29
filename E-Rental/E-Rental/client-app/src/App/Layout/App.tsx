import React, {useEffect, useState} from 'react';
import Navbar from '../../components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
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
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact />
      </Switch>
    <div>
      <List>
      {activities.map(activity  =>(
            <List.Item key={activity.id}>
                {activity.title}
     
    </List.Item>
      ))}
       </List>
    </div>
    </Router>
    </>
  );
}

export default App;
