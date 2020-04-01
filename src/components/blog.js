import React from 'react';

const Blog = ({ data }) => {
    return (
        <div className='page blog'>
            {data.split('\n').map((line, idx) => (
                <p key={idx}>{line}</p>
            ))}
        </div>
    );
};

export default Blog;
