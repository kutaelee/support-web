import React, { useState } from 'react';
import searchIcon from 'assist/icon/search-9-32.png';

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = () => {
    // 검색 버튼 클릭 시 검색어 전달
    //onSearch(searchText);
    console.log(searchText)
  };

  return (
    <div className='search-container inline-block w-5/6 text-right ml-16'>
      <input
        className='w-56 h-9 pl-2'
        type='text'
        placeholder='검색어를 입력하세요'
        value={searchText}
        onChange={handleInputChange}
      />
      <img
        src={searchIcon} // 검색 아이콘 이미지 경로로 변경
        alt='Search'
        className='ml-3 search-icon inline-block cursor-pointer w-6'
        onClick={handleSearchClick}
      />
    </div>
  );
};

export default Search;
