import React, {useState,useEffect} from 'react';
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
    const toggleSubMenu = (name) => {
        setMenuList((prevMenuList) =>
          prevMenuList.map((menu) =>
            menu.name === name ? { ...menu, isSubMenuVisible: !menu.isSubMenuVisible } : menu
          )
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

    const login=false;

    return (
        <div className="h-8 bg-black">

            <div
                className={`w-full md:w-80 h-full bg-white shadow-2xl fixed right-0 rounded-l-sm z-10 transition-opacity ${!isMenuVisible
                    ? 'opacity-95' : 'opacity-0'} duration-500 `}
                id="menu">


    <ul className="h-96 pt-40 select-none">
      {menuList.map((menu,idx) => (
        <li key={menu.name}  onClick={() => toggleSubMenu(menu.name)} className={`mb-3 w-fit hover:cursor-pointer text-2xl font-NanumExBold ml-28`}>
          {menu.name}
          <ul className={`pt-3 text-center overflow-hidden transition-max-height ease-in-out  ${menu.isSubMenuVisible ? 'max-h-96  duration-500' : 'duration-500 max-h-0'}`}>

              {menu.subMenus.map((subMenu) => (
                    <li key={subMenu.name} className={`mb-3 w-fit hover:cursor-pointe text-xl hover:text-orange-500`}>
                            - {subMenu.name}
                </li>
                 ))}
            </ul>
        </li>
      ))}
    </ul>
         
             <div className="w-full">
                {login ? <CustButton text="로그아웃"/>  : <> <CustButton text="회원가입"/> <CustButton text="로그인"/> </>  }
               
                </div>
                
            </div>

            <button
        className={`focus:outline-none ml right-8 top-3 z-20 fixed`}
        onClick={toggleMenu}
        id="modalToggleBtn">
        {!isMenuVisible ? (
                  <>
                  <div className="bg-black my-0 transition-transform transform rotate-45 origin-top-left duration-300 rounded-md w-10 h-2"></div>
                  <div className="opacity-0 w-6 h-0.5 bg-black my-1 transition-opacity"></div>
                  <div className="bg-black my-3 transition-transform transform -rotate-45 origin-bottom-left duration-300 rounded-md w-10 h-2"></div>
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

                <h1
                    className="text-white text-2xl font-NanumExBold pl-6 hover:cursor-pointer" alt="main button">Support .</h1>

            </div>

        </div>
    );
};

export default Header;