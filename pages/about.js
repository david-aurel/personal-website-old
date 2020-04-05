import Layout from './layout';
import data from './data';
const { about } = data;

const About = ({ data }) => {
    return (
        <div className='page about-me'>
            {about.split('\n').map((line, idx) => (
                <p key={idx}>{line}</p>
            ))}
        </div>
    );
};

export default Layout(About);
