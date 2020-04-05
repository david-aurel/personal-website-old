import Head from 'next/head';
import Header from './header';
import Navbar from './navbar';

const Layout = Page => {
    return () => (
        <>
            <Head>
                <title>David Durlan</title>
            </Head>
            <Header />
            <Navbar />
            <Page />
        </>
    );
};

export default Layout;
