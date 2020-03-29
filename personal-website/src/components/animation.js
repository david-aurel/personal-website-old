import React from 'react';
import './man.css';
import './animation.css';

const Animation = () => {
    return (
        <div class='animation-wrapper'>
            <div class='animation'>
                <div class='man'>
                    <div class='upper-body'>
                        <img class='r-arm' src='animation/r-arm.svg' />
                        <img class='torso' src='animation/torso.svg' />
                        <div class='l-arm'>
                            <img
                                class='l-up-arm'
                                src='animation/l-up-arm.svg'
                            />
                            <img
                                class='l-low-arm'
                                src='animation/l-low-arm.svg'
                            />
                        </div>
                    </div>
                    <div class='boat-legs-laptop-motor'>
                        <div class='motor'>
                            <div class='propeller'>
                                <img src='animation/propeller.svg' />
                                <img src='animation/propeller.svg' />
                            </div>
                            <img class='engine' src='animation/engine.svg' />
                        </div>
                        <img
                            class='legs-and-boat'
                            src='animation/legs-and-boat.svg'
                        />
                        <div class='laptop'>
                            <img
                                class='laptop-bottom'
                                src='animation/laptop-bottom.svg'
                            />
                            <img
                                class='laptop-top'
                                src='animation/laptop-top.svg'
                            />
                        </div>
                    </div>
                </div>
                <div class='water'>
                    <div class='wave'></div>
                </div>
            </div>
        </div>
    );
};

export default Animation;
