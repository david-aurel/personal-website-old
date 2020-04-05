const Animation = () => {
    return (
        <div className='animation-wrapper'>
            <div className='animation'>
                <div className='man'>
                    <div className='upper-body'>
                        <img
                            className='r-arm'
                            src='/animation/r-arm.svg'
                            alt=''
                        />
                        <img
                            className='torso'
                            src='/animation/torso.svg'
                            alt=''
                        />
                        <div className='l-arm'>
                            <img
                                className='l-up-arm'
                                src='/animation/l-up-arm.svg'
                                alt=''
                            />
                            <img
                                className='l-low-arm'
                                src='/animation/l-low-arm.svg'
                                alt=''
                            />
                        </div>
                    </div>
                    <div className='boat-legs-laptop-motor'>
                        <div className='motor'>
                            <div className='propeller'>
                                <img src='/animation/propeller.svg' alt='' />
                                <img src='/animation/propeller.svg' alt='' />
                            </div>
                            <img
                                className='engine'
                                src='/animation/engine.svg'
                                alt=''
                            />
                        </div>
                        <img
                            className='legs-and-boat'
                            src='/animation/legs-and-boat.svg'
                            alt=''
                        />
                        <div className='laptop'>
                            <img
                                className='laptop-bottom'
                                src='/animation/laptop-bottom.svg'
                                alt=''
                            />
                            <img
                                className='laptop-top'
                                src='/animation/laptop-top.svg'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div className='water'>
                    <div className='wave'></div>
                </div>
            </div>
        </div>
    );
};

export default Animation;
