import { useState } from 'react';
import Link from 'next/link';
const Navbar = () => {
    const [sliderState, setSliderState] = useState('slider-portfolio');
    return (
        <nav className='navLinks'>
            <div className={`slider ${sliderState}`}></div>

            <p className='navLink'>
                <Link href='/portfolio'>
                    <a>Portfolio</a>
                </Link>
            </p>
            {/* <div className='space'></div> */}
            <p className='navLink'>
                <Link href='/blog'>
                    <a>Blog</a>
                </Link>
            </p>
            {/* <div className='space'></div> */}
            <p className='navLink'>
                <Link href='/about'>
                    <a>About me</a>
                </Link>
            </p>
            {/* <div className='space'></div> */}
            <p className='navLink'>
                <Link href='/contact'>
                    <a>Contact</a>
                </Link>
            </p>
        </nav>
    );
};

export default Navbar;
