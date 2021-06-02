import { Form,Formik } from 'formik';
import { values } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button } from 'semantic-ui-react';
import { isConstructorDeclaration } from 'typescript';
import MyTextInput from '../App/common/form/MyTextInput';
import { useStore } from '../App/stores/useStore';

export default observer( function LoginForm(){
    const{userStore}= useStore();

    return(
        <Formik
        initialValues={{email: '',password: ''}}
        onSubmit={values => userStore.login(values)}>

        {({handleSubmit, isSubmitting}) =>(
            <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
                <MyTextInput name='email' placeholder='Email' />
                <MyTextInput name='password' placeholder='Password' type='password' />
                <Button loading={isSubmitting} positive content='Login' type ='submit' fluid/>

            </Form>
        )}
        </Formik>
    )
})