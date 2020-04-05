import data from './data';
import Layout from './layout';
const Blog = () => {
    return (
        <div className='page blog'>
            {data.blog.split('\n').map((line, idx) => (
                <p key={idx}>{line}</p>
            ))}
        </div>
    );
};

export default Layout(Blog);
