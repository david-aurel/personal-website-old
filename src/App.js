import React from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';

import Test from './test';

function App(props) {
    const data = props.data.portfolio[0]['bullet-points'][0].map(
        (bpoint, i) => {
            return <li key={i}>{bpoint}</li>;
        }
    );

    return (
        <div>
            <Router>
                <Link to='/test'>test</Link>
                <ul>{data}</ul>
                <Route>
                    <Switch>
                        <Route path='/test'>
                            <Test />
                        </Route>
                    </Switch>
                </Route>
            </Router>
        </div>
    );
}

export default App;
