import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from 'react-router-dom';

const PortfolioCard = ({ data }) => {
    const { project } = useParams();
    return (
        <div className='page'>
            <Link to='/portfolio'>back to nav</Link>
            <p>{data[project].title}</p>
        </div>
    );
};

export default PortfolioCard;
