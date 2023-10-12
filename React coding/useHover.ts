import {Ref, useEffect, useRef, useState} from 'react';

export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {
    // create a reference for html element
    const ref = useRef<T>();

    // store state for hovered status
    const [isHovered, setIsHovered] = useState<boolean>(false);

    useEffect(() => {
        setIsHovered(false);

        const element = ref.current;

        if(!element) return;

        // add event listener to referenced element
        element.addEventListener('mouseenter', () => setIsHovered(true));
        element.addEventListener('mouseleave', () => setIsHovered(false));

        return () => {
            // clean up 
            element.removeEventListener('mouseenter', () => setIsHovered(true));
            element.removeEventListener('mouseleave', () => setIsHovered(false));
        }
    }, [ref.current]);

    return [ref, isHovered];
}