import React from 'react';
import { useNavigate } from 'react-router-dom';



const MoveButton = (props) => {
    const navigate = useNavigate();
  
    const movePage = () => {
      // '/mypage' 경로로 이동
      navigate(props.location);
    };
    return (<div className="inline z-50">
        <button onClick={movePage} className="mr-5 font-NanumSquare">{props.text}</button>
    </div>);
};

export default MoveButton;