import React from 'react';

const Contact = ({ data }) => {
    return (
        <div className='page'>
            <p>CONTACT</p>
            <div className='contact page'>
                <div className='contact-card'>
                    <ul>
                        {data.map((el, idx) => {
                            return (
                                <li key={idx}>
                                    <a
                                        href={el.url}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <img src={el.imgUrl} alt='' />
                                        <p>{el.value}</p>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='contact-form'>
                    <h4>...Or write me here!</h4>
                    <form action='/contact-me' method='POST'>
                        <div className='form-sender'>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='name'
                                required
                            />
                            <input
                                type='email'
                                name='email'
                                id='email'
                                placeholder='email'
                                required
                            />
                        </div>
                        <input
                            type='text'
                            name='subject'
                            id='subject'
                            placeholder='subject'
                        />
                        <textarea
                            name='message'
                            id='message'
                            placeholder='message'
                        ></textarea>
                        <button>submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
