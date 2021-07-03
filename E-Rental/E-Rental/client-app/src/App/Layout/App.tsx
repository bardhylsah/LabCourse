import React, {useEffect} from 'react';
import Navbar from '../../components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import {Container} from 'semantic-ui-react';
import ActivityDashboard from '../../Features/activities/Dashboard/ActivityDashboard';
import Home from '../../components/pages/Home';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/useStore';
import { observer } from 'mobx-react-lite';
import LoginForm from "../../users/LoginForm";
import ActivityDetails from '../../Features/activities/details/ActivityDetails';
import TestErrors from '../../Features/activities/errors/TestErrors';
import {ToastContainer} from 'react-toastify';
import NotFound  from '../../Features/activities/errors/NotFound';
import Contact from '../../Contact/Contact';






function App() {
  return (
    <>
    <ToastContainer position='bottom-right' hideProgressBar/>
    <Route exact path='/'  component= {Home} />
   <Route 
   path={'/(.+)'}
   render={() =>(
     <>
      <Navbar />
      <Switch>
        <Route exact path='/services'  component= {ActivityDashboard} />
        <Route  path='/services/:id' component= {ActivityDetails} />
        <Route path='/SignUp' component={LoginForm}/>
        <Route path='/locations' />
        <Route path='/contact' component={Contact} />
        <Route path='/errors' component={TestErrors}/>
        <Route component={NotFound}/>
      </Switch>
    </>
    )}
    />
    </>
  );
}

export default observer(App);
