import { useEffect } from 'react';

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