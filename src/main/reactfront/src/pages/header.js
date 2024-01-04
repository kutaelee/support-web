import React, { useState, useEffect } from 'react';
import CustButton from 'component/custButton';
import axios from 'axios';



const Header = (props) => {

  const [isMenuVisible, setMenuVisibility] = useState(true);
  const [menuList, setMenuList] = useState([
    { name: '정기점검', subMenus: [{ name: 'sub1' }, { name: 'sub2' }] },
    { name: '기술지원', subMenus: [{ name: 'sub3' }, { name: 'sub4' }] },
  ]);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };
  const prevMenuName='';

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
    <div className="h-8 bg-black">
      <div
        className={`w-full md:w-80 h-full shadow-2xl fixed right-0 rounded-l-lg z-10 transition-opacity ${
          !isMenuVisible ? 'bg-opacity-95' : 'opacity-0'
        } duration-500 bg-orange-600 shadow-md shadow-orange-400`}
        id="menu"
      >
        <div className="h-96 pt-40 select-none text-center">
    
          {menuList.map((menu, idx) => (
            <div key={menu.name} onClick={() => toggleSubMenu(menu.name)} className={` ${
              menu.isSubMenuVisible ? 'bg-slate-50 text-orange-600':'text-white'} hover:cursor-pointer  text-2xl font-NanumSquare`}>
             <span>{menu.name}</span> 
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
            
                className={`bg-slate-50 pt-3 text-center overflow-hidden transition-max-height ease-in-out  ${
                  menu.isSubMenuVisible ? 'max-h-96  duration-300 opacity-100' : 'duration-300 max-h-0 opacity-0'
                }`}
              >
                {menu.subMenus.map((subMenu) => (
             
                  <a href="#" key={subMenu.name} className={`text-black hover:text-orange-600 mb-3 text-xl w-full block h-full`}>
                    {subMenu.name}
                  </a>
                  
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full">
          {login ? (
            <CustButton text="로그아웃" />
          ) : (
            <>
              <CustButton text="회원가입" /> <CustButton text="로그인" />
            </>
          )}
        </div>
      </div>

      <button
        className={`focus:outline-none ml right-8 top-3 z-20 fixed`}
        onClick={toggleMenu}
        id="modalToggleBtn"
      >
        {!isMenuVisible ? (
          <>
            <div className="bg-white my-0 transition-transform transform rotate-45 origin-top-left duration-300 rounded-md w-10 h-2"></div>
            <div className="opacity-0 w-6 h-0.5 bg-white my-1 transition-opacity"></div>
            <div className="bg-white my-3 transition-transform transform -rotate-45 origin-bottom-left duration-300 rounded-md w-10 h-2"></div>
          </>
        ) : (
          <>
            <div className="w-8 h-1.5 rounded-md bg-white my-1 transition-transform transform -rotate-0 origin-bottom-left duration-300"></div>
            <div className="w-8 h-1.5 rounded-md bg-white my-1"></div>
            <div className="w-8 h-1.5 rounded-md bg-white my-1 transition-transform transform -rotate-0 origin-bottom-left duration-300"></div>
          </>
        )}
      </button>

      <div className="h-14 fixed items-center z-20 mt-2">
        <h1 className="text-white text-2xl font-NanumExBold pl-6 hover:cursor-pointer duration-150 hover:text-orange-600" alt="main button">
          Support .
        </h1>
      </div>
    </div>
  );
};

export default Header;
