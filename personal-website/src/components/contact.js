import React, { useState } from 'react';
import axios from 'axios';

const Contact = ({ data }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formInfo, setFormInfo] = useState('...Or write me here!');
    const sendEmail = async () => {
        setError(false);
        if (!name) {
            return setFormInfo('Please provide a name');
        } else if (!/^.+@.+\..+$/.test(email)) {
            return setFormInfo('Please provide a valid email');
        } else if (!subject) {
            return setFormInfo('Please provide a subject');
        } else if (!message) {
            return setFormInfo('Please provide a message');
        } else {
            setFormInfo('Sending...');
        }
        const { data } = await axios.post('/contact-me', {
            name: name,
            email: email,
            subject: subject,
            message: message
        });
        if (data.success) {
            setSuccess('true');
            setFormInfo('Success!');
        } else {
            console.log('error while sending an email:', data.err);
            setFormInfo(
                `${data.err.statusCode} Error. David promises to fix this.`
            );
            setError(data.err);
        }
    };

    return (
        <div className='page'>
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
                    {/* {serverError && (
                        <h4 className='error'>
                            {`${serverError.statusCode} - ${serverError.message}`}
                        </h4>
                    )}
                    {userError && <h4 className='error'>{userError}</h4>}
                    {loading && <h4>Loading...</h4>}
                    {success && <h4 className='success'>Success!</h4>}
                    {!userError && !serverError && !success && (
                        <h4>...Or write me here!</h4>
                    )} */}
                    <h4
                        className={
                            success ? 'success' : '' || error ? 'error' : ''
                        }
                    >
                        {formInfo}
                    </h4>

                    <div className='form-sender'>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='name'
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='email'
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <input
                        type='text'
                        name='subject'
                        id='subject'
                        placeholder='subject'
                        onChange={e => setSubject(e.target.value)}
                    />
                    <textarea
                        name='message'
                        id='message'
                        placeholder='message'
                        onChange={e => setMessage(e.target.value)}
                    ></textarea>
                    <button onClick={sendEmail}>submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
