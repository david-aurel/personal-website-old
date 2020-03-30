import React, { useState, useEffect } from 'react';

const Blog = () => {
    const [apiMessage, setApiMessage] = useState('');
    useEffect(() => {
        (async () => {
            const response = await fetch('/api/message');
            const { message } = await response.json(); // "meow"
            setApiMessage(message);
        })();
    });
    return (
        <div className='page'>
            <p>BLOG</p>
            <p>{apiMessage}</p>
        </div>
    );
};

export default Blog;
