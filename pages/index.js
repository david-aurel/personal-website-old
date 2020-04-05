import Layout from './layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Index = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('/portfolio');
    });
    return null;
};

export default Layout(Index);
