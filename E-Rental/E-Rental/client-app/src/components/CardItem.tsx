import { LocationDescriptor, Location } from 'history';
import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props: { path: LocationDescriptor<unknown> | ((location: Location<unknown>) => LocationDescriptor<unknown>); label: any; src: string | undefined; text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {
    return (
        <>
        <li className="cards__item">
            <Link className="cards__item__link" to={props.path}>
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="Car" className="cards__item__img" />
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">{props.text}</h5>
                </div>
            </Link>
        </li>
        </>
    );
}

export default CardItem;
