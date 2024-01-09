import React,{Component} from 'react';
import { useNavigate } from 'react-router-dom';
import MainGrid from 'component/mainGrid';
import mainGrid1 from 'assist/img/supportGrid.png';
const Home = (props) => {
  const navigate = useNavigate();

  return (
    <div className="bg-black">
      <MainGrid imgWidth="1000px" imgSrc={`${mainGrid1}`}/>
      <h1>Home</h1>
      <button
        onClick={() => {
          navigate('/mypage');
        }}
      >
        Go to MyPage
      </button>
    </div>
  );
};

export default Home;