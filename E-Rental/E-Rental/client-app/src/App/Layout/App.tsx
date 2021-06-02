import React, {useEffect} from 'react';
import Navbar from '../../components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import {Container} from 'semantic-ui-react';
import ActivityDashboard from '../../Features/activities/Dashboard/ActivityDashboard';
import Home from '../../components/pages/Home';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
import Service from '../../components/pages/Service';
import Footer from '../../components/Footer';



function App() {
  const {activityStore} = useStore();


  useEffect(() =>{
      activityStore.loadActivities();
  }, [activityStore])




  if(activityStore.loadingInitial) return <LoadingComponent content='Loading app' />


  return (
    <>
    <Router>
      <Navbar />
       
      <Switch>
        <Route path='/' exact component= {Home} />
      </Switch>
      <Switch>
      <Route path='/' exact component= {Service} />
      <Container style={{marginTop: '5em'}}>
        <ActivityDashboard />
       </Container>
       </Switch>
       <Footer />
      
    </Router>
    
    </>
    
  );
}

export default observer(App);
