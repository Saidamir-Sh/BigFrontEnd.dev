import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedVal, setDebouncedVal] = useState<T>(value);

    useEffect(() => {
        // update the value with given delay
        const debounceHandler = setTimeout(() => {
            setDebouncedVal(value)
        }, delay);

        return () => {
            clearTimeout(debounceHandler)
        }
    }, [value, delay]); 

    // return debounced value
    return debouncedVal
}