import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
    return (
        <div className='cards'>
           <h1> Check out some of Our Cars</h1>
           <div className="cards__container">
               <div className="cards__wrapper">
                   <ul className="cards__items">
                       <CardItem
                       src={require('../components/images/Twingo.png').default}
                       text='€17/day in France'
                       label='Try It'
                       path='/services' />
                   </ul>
               </div>
           </div>
        </div>
    )
}

export default Cards;
