import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export const useShowCV = () => {
    const router = useRouter();
    const [showCV, setShowCV] = useState(true);

    useEffect(() => {
        const searchParams = new URLSearchParams(router.asPath.split('?')[1]);
        const paramValue = searchParams.get('CV');

        if (!paramValue || paramValue === 'false') {
            setShowCV(false);
        } else {
            setShowCV(true);
        }
    }, [router.asPath]);

    return showCV;
};