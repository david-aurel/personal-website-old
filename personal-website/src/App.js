import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import Header from './components/header.js';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Blog from './components/blog';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = 'slider';
        script.async = true;

        document.body.appendChild(script);
    });
    return (
        <>
            <Header />
            <Router>
                <div className='App'>
                    <nav>
                        <div className='navLinks'>
                            <p className='navLink'>
                                <Link to='/blog'>Blog</Link>
                            </p>
                            <p className='navLink'>
                                <Link to='/portfolio'>Portfolio</Link>
                            </p>
                            <p className='navLink'>
                                <Link to='/about'>About me</Link>
                            </p>
                            <p className='navLink'>
                                <Link to='/contact'>Contact</Link>
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
                                        <Route path='/blog'>
                                            <Blog />
                                        </Route>
                                        <Route path='/portfolio'>
                                            <Portfolio />
                                        </Route>
                                        <Route path='/about'>
                                            <About />
                                        </Route>
                                        <Route path='/contact'>
                                            <Contact />
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
