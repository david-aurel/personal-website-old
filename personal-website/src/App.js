import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

function App() {
    return (
        <Router>
            <div className='App'>
                <nav>
                    <p>
                        <Link to='/about'>About</Link>
                    </p>
                    <p>
                        <Link to='/portfolio'>Portfolio</Link>
                    </p>
                    <p>
                        <Link to='/contact'>Contact</Link>
                    </p>
                </nav>
                <Route
                    render={({ location }) => (
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                timeout={500}
                                classNames='fade'
                            >
                                <Switch location={location}>
                                    <Route path='/about'>
                                        <About />
                                    </Route>
                                    <Route path='/portfolio'>
                                        <Portfolio />
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
    );
}

export default App;
