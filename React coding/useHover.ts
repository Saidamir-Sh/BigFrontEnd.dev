import {Ref, useEffect, useRef, useState} from 'react';

export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {
    const ref = useRef<T>();
    const [isHovered, setIsHovered] = useState<boolean>(false);

    useEffect(() => {
        setIsHovered(false);

        const element = ref.current;

        element.addEventListener('mouseenter', () => setIsHovered(true));
        element.addEventListener('mouseleave', () => setIsHovered(false));

        return () => {
            element.removeEventListener('mouseenter', () => setIsHovered(true));
            element.removeEventListener('mouseleave', () => setIsHovered(false));
        }
    }, [ref.current]);

    return [ref, isHovered];
}