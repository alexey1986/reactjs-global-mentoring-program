import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
    const count = useSelector(state => state.fetchReducer.totalAmount);
    const isLoading = useSelector(state => state.fetchReducer.isLoading);

    if (!isLoading && count) {
        return <div>{count} movies found</div>
    }
    
    return null;
}

export default Counter;