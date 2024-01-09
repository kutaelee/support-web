import React from 'react';

const SuccessButton = (props) => {
    return (
        <>
        <button className='hover:bg-orange-700 bg-orange-600 text-white font-NanumSquare w-28 h-14 text-md rounded-sm tracking-wider'>{props.text}</button>
        </>);
};

export default SuccessButton;