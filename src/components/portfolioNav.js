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
                        <div
                            style={{
                                backgroundImage: `url(${el.thumbnail})`,
                                height: '100%',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'contain'
                            }}
                        ></div>
                    </Link>
                );
            })}
        </div>
    );
};

export default PortfolioNav;
