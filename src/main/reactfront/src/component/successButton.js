import React from 'react';

const SuccessButton = (props) => {
    return (
        <>
        <button className='transition duration-300 hover:bg-orange-700 bg-orange-600 text-white font-NanumSquare w-full h-full text-md rounded-md tracking-wider'>{props.text}</button>
        </>);
};

export default SuccessButton;