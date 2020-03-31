import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PortfolioCard from './portfolioCard';
import PortfolioNav from './portfolioNav';

const Portfolio = ({ data, location }) => {
    const [animationClassName, setAnimationClassName] = useState('slide');
    const changeAnimation = direction => {
        console.log('animation changed to', direction);

        setAnimationClassName(direction);
    };
    return (
        <Router>
            <Route
                render={({ location }) => (
                    <TransitionGroup
                        className='main'
                        childFactory={child =>
                            React.cloneElement(child, {
                                classNames: animationClassName
                            })
                        }
                    >
                        <CSSTransition
                            key={location.key}
                            timeout={500}
                            classNames={animationClassName}
                        >
                            <Switch location={location}>
                                <Route exact path='/portfolio'>
                                    <PortfolioNav
                                        data={data}
                                        changeAnimation={changeAnimation}
                                    />
                                </Route>
                                <Route path='/portfolio/:project'>
                                    <PortfolioCard
                                        data={data}
                                        changeAnimation={changeAnimation}
                                    />
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
