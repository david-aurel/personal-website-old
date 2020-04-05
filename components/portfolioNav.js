import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioNav = ({ data, changeAnimation }) => {
    return (
        <div className='page portfolioNav'>
            {data.map((el, id) => {
                return (
                    <Link
                        to={`/portfolio/${id}`}
                        key={id}
                        onClick={() => changeAnimation('slide')}
                    >
                        {/* <img className='thumbnail' src={el.thumbnail} alt='' /> */}
                        <p>{el.title}</p>
                        <img src={el.thumbnail} alt='' />
                    </Link>
                );
            })}
        </div>
    );
};

export default PortfolioNav;
