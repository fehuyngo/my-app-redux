import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue } from '../redux-toolkit/counterSlice';
// import { decrement, increment, incrementbyvalue } from '../redux/counter';

const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(increment());
    }
    const handleDecrement = () => {
        dispatch(decrement());
    }
    const handleIncrementByValue = () => {
        dispatch(incrementByValue(10));
    }
    return (
        <div className='flex flex-col items-center p-5 bg-white shadow w-[400px] mx-auto mt-10'>
            <h2 className='mb-5'>Count: {count}</h2>
            <div className='flex justify-center gap-x-5'>
                <button className='inline-block p-2 border border-gray-300'
                onClick={handleIncrement}>
                    Increment
                </button>
                <button className='inline-block p-2 border border-gray-300'
                onClick={handleDecrement}>
                    Decrement
                </button>
                <button className='inline-block p-2 border border-gray-300'
                onClick={handleIncrementByValue}>
                    Increase by 10
                </button>
            </div>
        </div>
    );
};

export default Counter;