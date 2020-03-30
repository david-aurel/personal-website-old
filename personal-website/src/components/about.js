import React from 'react';

const About = ({ data }) => {
    return (
        <div className='page about-me'>
            {data.split('\n').map((line, idx) => (
                <p key={idx}>{line}</p>
            ))}
        </div>
    );
};

export default About;
