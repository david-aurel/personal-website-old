import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import Header from './components/header.js';
import About from './components/about';
import Portfolio from './components/portfolio';
import PortfolioCard from './components/portfolioCard';
import Contact from './components/contact';
import Blog from './components/blog';
import data from './data';

function App() {
    const [sliderState, setSliderState] = useState('slider-blog');
    return (
        <>
            <Header />
            <Router>
                <div className='App'>
                    <nav>
                        <div className='navLinks'>
                            <div className={`slider ${sliderState}`}></div>
                            <p className='navLink'>
                                <Link
                                    to='/'
                                    onClick={() => {
                                        setSliderState('slider-blog');
                                    }}
                                >
                                    Blog
                                </Link>
                            </p>
                            <div className='space'></div>
                            <p className='navLink'>
                                <Link
                                    to='/portfolio'
                                    onClick={() => {
                                        setSliderState('slider-portfolio');
                                    }}
                                >
                                    Portfolio
                                </Link>
                            </p>
                            <div className='space'></div>
                            <p className='navLink'>
                                <Link
                                    to='/about'
                                    onClick={() => {
                                        setSliderState('slider-about');
                                    }}
                                >
                                    About me
                                </Link>
                            </p>
                            <div className='space'></div>
                            <p className='navLink'>
                                <Link
                                    to='/contact'
                                    onClick={() => {
                                        setSliderState('slider-contact');
                                    }}
                                >
                                    Contact
                                </Link>
                            </p>
                        </div>
                    </nav>

                    <Route
                        render={({ location }) => (
                            <TransitionGroup className='main'>
                                <CSSTransition
                                    key={location.key}
                                    timeout={500}
                                    classNames='fade'
                                >
                                    <Switch location={location}>
                                        <Route exact path='/'>
                                            <Blog data={data.blog} />
                                        </Route>

                                        <Route path='/portfolio'>
                                            <Portfolio data={data.portfolio} />
                                        </Route>
                                        <Route path='/about'>
                                            <About data={data['about-me']} />
                                        </Route>
                                        <Route path='/contact'>
                                            <Contact
                                                data={data['contact-card']}
                                            />
                                        </Route>
                                        <Route path='/portfolio/:project'>
                                            <PortfolioCard />
                                        </Route>
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        )}
                    />
                </div>
            </Router>
        </>
    );
}

export default App;
