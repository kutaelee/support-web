import MoveButton from 'component/moveButton';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//import axios from 'axios';



const Header = () => {
  const navigate = useNavigate();
  const [isMenuVisible, setMenuVisibility] = useState(true);
  const [menuList, setMenuList] = useState([
    { name: '정기점검', subMenus: [{ name: '점검일정',uri:'/inspection/plan' }, { name: '점검이력' , uri:'/inspection/history' }] },
    { name: '기술지원', subMenus: [{ name: '지원보고서' , uri:'/support/report' }, { name: '지원이력' ,uri:'/support/history' }] },
  ]);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };

  const toggleSubMenu = (name) => {
    setMenuList((prevMenuList) =>
      prevMenuList.map((menu) => ({
        ...menu,
        isSubMenuVisible: menu.name === name ? !menu.isSubMenuVisible : false,
      }))
    );
  };

  /*
  useEffect(() => {
      // Axios로 메뉴 데이터를 받아오는 비동기 함수
      const fetchMenuData = async () => {
        try {
          const response = await axios.get('your_api_endpoint'); 
          setMenuList(response.data);
        } catch (error) {
          console.error('Error fetching menu data:', error);
        }
      };
  
      fetchMenuData(); // 메뉴 데이터를 받아오는 함수 호출
    }, []);
  */

  const login = false;


  return (
    <div className='h-14 bg-black fixed z-10'>
      {/* menu list */}
      <div
        className={`w-full md:w-80 h-full shadow-2xl fixed right-0 rounded-l-lg z-10 transition-opacity ${
          !isMenuVisible ? 'opacity-90 block' : 'opacity-0 hidden'
        } duration-500 bg-white shadow-md shadow-white-400`}
        id='menu'
      >
        <div className='h-96 pt-40 select-none text-center'>
    
          {menuList.map((menu) => (
            <div key={menu.name} onClick={() => toggleSubMenu(menu.name)} className={`hover:cursor-pointer text-2xl font-NanumSquare`}>
             <span className={` w-full ${
              menu.isSubMenuVisible ? 'bg-gray-950 text-white':'text-black'} tracking-wider font-semibold block`}>{menu.name}</span> 
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
            
                className={`bg-gray-700 pt-3 text-center overflow-hidden  transition-max-height ease-in-out duration-300 tracking-wide ${
                  menu.isSubMenuVisible ? 'max-h-svh opacity-100' : 'max-h-0 opacity-0'
                }`}
                
              >
                {menu.subMenus.map((subMenu) => (
             
                  <MoveButton text={subMenu.name} location={subMenu.uri} key={subMenu.name} className={`text-gray-400 hover:text-white mb-3 text-xl w-full block h-full`}>
                    {subMenu.name}
                  </MoveButton>
                  
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
     {/* menu buuton */}
      <button
        className={`focus:outline-none ml right-8 top-3 z-20 fixed`}
        onClick={toggleMenu}
        id='modalToggleBtn'
      >
        {!isMenuVisible ? (
          <>
            <div className='bg-black my-0 transition-transform transform rotate-45 origin-top-left duration-300 rounded-md w-10 h-2'></div>
            <div className='opacity-0 w-6 h-0.5 bg-black my-1 transition-opacity'></div>
            <div className='bg-black my-3 transition-transform transform -rotate-45 origin-bottom-left duration-300 rounded-md w-10 h-2'></div>
          </>
        ) : (
          <>
            <div className='w-8 h-1.5 rounded-md bg-white my-1 transition-transform transform -rotate-0 origin-bottom-left duration-300'></div>
            <div className='w-8 h-1.5 rounded-md bg-white my-1'></div>
            <div className='w-8 h-1.5 rounded-md bg-white my-1 transition-transform transform -rotate-0 origin-bottom-left duration-300'></div>
          </>
        )}
      </button>
      {/* logo */}
      <div className='h-14 fixed items-center z-20 mt-2'>
        <button onClick={()=>navigate('/')} className=' text-white text-2xl font-NanumExBold pl-6 duration-150 hover:text-orange-600' alt='main button'>
          Support .
        </button>
      </div>
      
      {/* login menu */}
      <div className='w-full text-right pr-20 pt-4 text-white fixed'>
      {login ? (
            <MoveButton text='로그아웃' />
          ) : (
            <>
            <MoveButton text='회원가입' location='/join' />  <MoveButton text='로그인' location='/login'  />
            </>
          )}
        </div>

    </div>
    
  );
};

export default Header;
