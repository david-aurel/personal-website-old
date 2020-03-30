import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = ({ data }) => {
    return (
        <div className='page about-me'>
            {data.split('\n').map(line => (
                <p>{line}</p>
            ))}
        </div>
    );
};

export default About;
