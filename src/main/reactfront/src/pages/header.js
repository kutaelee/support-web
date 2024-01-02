import React, {useState} from 'react';

const Header = (props) => {
    const [isMenuVisible, setMenuVisibility] = useState(true);

    const toggleMenu = () => {
        console.log("click")
        setMenuVisibility(!isMenuVisible);
    };

    return (
        <div>

            <div
                className={`w-full md:w-80 h-full bg-white shadow-2xl absolute right-0 rounded-l-sm z-10 transition-opacity ${!isMenuVisible
                    ? 'opacity-90' : 'opacity-0'} duration-500`}
                id="menu">
                <ul>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hi</li>
                </ul>
            </div>

            <button
        className={`focus:outline-none ml right-8 top-5 z-20 absolute`}
        onClick={toggleMenu}
        id="modalToggleBtn">
        {!isMenuVisible ? (
                  <>
                  <div className="bg-black my-0 transition-transform transform rotate-45 origin-top-left duration-300 rounded-md w-10 h-2"></div>
                  <div className="opacity-0 w-6 h-0.5 bg-white my-1 transition-opacity"></div>
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

            <div className="bg-orange-600 h-20 flex items-center">

                <h1
                    className="text-white text-2xl font-NanumExBold pl-6 hover:cursor-pointer w-11/12">기술지원 서포터</h1>

            </div>

        </div>
    );
};

export default Header;