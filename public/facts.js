import fetch from 'isomorphic-fetch';

function getFacts() {
    return fetch('https://ssr-react.firebaseio.com/facts/json').then((res) =>
        res.json()
    );
}

export default getFacts;
