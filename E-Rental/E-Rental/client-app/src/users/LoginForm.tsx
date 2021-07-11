import { ErrorMessage, Form, Formik } from 'formik';
import { values } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Label } from 'semantic-ui-react';
import { isConstructorDeclaration } from 'typescript';
import MyTextInput from '../App/common/form/MyTextInput';
import { useStore } from '../App/store/useStore';
import './Login.css'
import images from './images.jpg';
import ModalStore from '../App/store/modalStore';
import RegisterForm from './RegisterForm';
import { Link } from 'react-router-dom';

export default observer( function LoginForm(){
    const{userStore, modalStore}= useStore();

    return(
        <div className="back" 
        style={{ background:`url(${images})` ,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
        <Formik
        initialValues={{email: '',password: '', error:null}}
        onSubmit={(values,{setErrors}) => userStore.login(values).catch(error => 
        setErrors({error:'Invalid email or password'}))}>

        {({handleSubmit, isSubmitting, errors}) =>(
            <Form className="Login" onSubmit={handleSubmit} autoComplete='off'>
                 
                <MyTextInput   name='email' placeholder='Email' />
                <MyTextInput name='password' placeholder='Password' type='password' />
                <ErrorMessage
                name='error' render={()=>
                <Label style={{marginBottom:10}} basic color='red' content={errors.error}/>}
                />
                <Button style={{
                    marginTop: 20,
                    height: 50,}} 
                loading={isSubmitting} positive content='Login' type ='submit' fluid/>

                <p >Don't have a acount?</p>
                <strong onClick={()=> modalStore.openModal(<RegisterForm/>)}>Create account</strong>

                 <div id="alternativeLogin">
                     <label>Or sign in with:</label>
                     <div id="iconGroup">
                     <a href="#" id="facebookIcon"></a>
                     <a href="#" id="twitterIcon"></a>
                     <a href="#" id="googleIcon"></a>
                       
    </div>
  </div>

            </Form>
        )}
        </Formik>
        </div>
    )
})