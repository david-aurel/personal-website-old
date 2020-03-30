import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PortfolioCard from './portfolioCard';
import PortfolioNav from './portfolioNav';

const Portfolio = ({ data }) => {
    return (
        <Router>
            {/* <div className='page'>
                <div className='portfolio-card-wrapper'>
                    {data.map((el, idx) => {
                        return (
                            <Link
                                className='portfolio-card'
                                to={`portfolio/${el.title
                                    .toLowerCase()
                                    .replace(' ', '')}`}
                                key={idx}
                            >
                                {el.title}
                            </Link>
                        );
                    })}
                </div>
            </div> */}
            <Route
                render={({ location }) => (
                    <TransitionGroup className='main'>
                        <CSSTransition
                            key={location.key}
                            timeout={500}
                            classNames='fade'
                        >
                            <Switch>
                                <Route exact path='/portfolio'>
                                    <PortfolioNav data={data} />
                                </Route>
                                <Route path='/portfolio/:project'>
                                    <PortfolioCard data={data} />
                                </Route>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}
            />
        </Router>
    );
};

export default Portfolio;
