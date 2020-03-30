import React from 'react';

const Contact = ({ data }) => {
    console.log(data);

    return (
        <div className='page'>
            <p>CONTACT</p>
            <div class='contact page'>
                <div class='contact-card'>
                    <ul>
                        {/* {{#data/contact-card}}
                            <li>
                                <a href={{url}} target="_blank">
                                    <img src={{imgUrl}} alt="">
                                    <p>{{value}}</p>
                                </a>
                            </li>
                            {{/data/contact-card}} */}
                        {data.map((el, idx) => {
                            return (
                                <li>
                                    <a href={el.url} target='_blank'>
                                        <img src={el.imgUrl} alt='' />
                                        <p>{el.value}</p>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div class='contact-form'>
                    <h4>...Or write me here!</h4>
                    <form action='/contact-me' method='POST'>
                        <div class='form-sender'>
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
