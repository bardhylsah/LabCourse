import { observer } from 'mobx-react-lite';
import React from 'react';
import Calendar from 'react-calendar';
import { Header, Menu } from 'semantic-ui-react';
import { useStore } from '../../../App/store/useStore';

export default observer(function ActivityFilters() {
    return (
        <>
           
            <Header />
            <Calendar/>
        </>
    )
})