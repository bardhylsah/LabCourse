import React, {Component,useEffect, useState} from 'react';
import Navbar from '../../components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { collapseTextChangeRangesAcrossMultipleVersions, setConstantValue } from 'typescript';
import { Header, List } from 'semantic-ui-react';
import {Activity} from '../Models/Activity';
import ActivityDashboard from '../../Features/activities/Dashboard/ActivitiesDashboard';
import { Link } from 'react-router-dom';
import Home from '../../components/pages/Home';



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
        <Route path='/' exact component= {Home} />
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
