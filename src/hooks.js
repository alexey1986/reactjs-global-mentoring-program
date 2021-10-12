import { useEffect } from 'react';

// NOTE: Delete these hooks if you don't use them. And it's better to use 'useEffect' instead of these hooks

export const useComponentDidMount = (callback) => {
    useEffect(() => {
        callback()
    }, [])
}

export const useComponentDidUpdate = (callback) => {
    useEffect(() => {
        callback()
    })
}

export const useComponentDidUnmount = (callback) => {
    useEffect(() => {
        return function() {
            callback()
        }
      }, []);
}