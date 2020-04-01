import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PortfolioCard = ({ data, changeAnimation }) => {
    const { project } = useParams();
    data = data[project];

    const bulletPoints = () => {
        if (data['multiple-bullets']) {
            // Loop trough multiple bullet points
            return data['bullet-points'].map((el, idx) => {
                return (
                    <ul key={idx}>
                        {el.map((el, idx) => {
                            return <li key={idx}>{el}</li>;
                        })}
                    </ul>
                );
            });
        } else {
            // loop trough regular bulletpoints
            return (
                <ul>
                    {data['bullet-points'].map((el, idx) => {
                        return <li key={idx}>{el}</li>;
                    })}
                </ul>
            );
        }
    };
    return (
        <div className='page portfolio'>
            <Link to='/portfolio' onClick={() => changeAnimation('slide-back')}>
                <img
                    src='/icons/back.svg'
                    name='back'
                    alt=''
                    className='icon'
                />{' '}
            </Link>
            <div className='portfolio-card'>
                <h2>{data.title}</h2>

                <video
                    src={data.imgUrl}
                    type='video/mp4'
                    autoPlay
                    muted
                    loop
                    controls
                ></video>

                <p class='portfolio-description'>{data.description}</p>

                <p>{data.text}</p>

                {data['bullet-points'] && <h4>Features:</h4> && bulletPoints()}

                <a href={data.url} target='_blank' rel='noopener noreferrer'>
                    {data.url}
                </a>
            </div>
        </div>
    );
};

export default PortfolioCard;
