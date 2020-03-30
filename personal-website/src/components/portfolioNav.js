import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const PortfolioNav = ({ data }) => {
    return (
        <div className='page'>
            {data.map((el, id) => {
                return (
                    <Link to={`/portfolio/${id}`} key={id}>
                        link to {el.title} card
                    </Link>
                );
            })}
        </div>
    );
};

export default PortfolioNav;
