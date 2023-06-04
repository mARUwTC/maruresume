import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export const useShowDiv = () => {
    const router = useRouter();
    const [showDiv, setShowDiv] = useState(true);

    useEffect(() => {
        const searchParams = new URLSearchParams(router.asPath.split('?')[1]);
        const paramValue = searchParams.get('CV');

        if (!paramValue || paramValue === 'false') {
            setShowDiv(false);
        } else {
            setShowDiv(true);
        }
    }, [router.asPath]);

    return showDiv;
};