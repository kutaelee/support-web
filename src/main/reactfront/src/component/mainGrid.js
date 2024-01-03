import React from 'react';
import mainGridImg from 'assist/img/supportGrid.png';

const MainGrid = (props) => {
    return (<div className="items-center h-screen relative mb-64">
        <img src={`${props.imgSrc}`} style={{ width:`${props.imgWidth}`}} className={`z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 relative shadow-gray-600 shadow-sm`}></img>

    </div>);
};

export default MainGrid;