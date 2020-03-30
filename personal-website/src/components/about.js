import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = ({ data }) => {
    return (
        <div className='page about-me'>
            <p>ABOUT</p>
            {data.split('\n').map(line => (
                <p>{line}</p>
            ))}
        </div>
    );
};

export default About;
