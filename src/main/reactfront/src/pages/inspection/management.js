// InspectionManagement.js
import React, { useState } from 'react';
import Table from 'component/table';
import Pagination from 'component/pagination';

const InspectionManagement = () => {
  // 로컬 데이터 예시
  const localData = [
    { id: 1, title: '사이트 1', checkType: '정기', manager: '담당자1', registrationDate: '2022-01-01', registrant: '등록자1' },
    { id: 2, title: '사이트 1', checkType: '정기', manager: '담당자1', registrationDate: '2022-01-01', registrant: '등록자1' },
    { id: 3, title: '사이트 1', checkType: '정기', manager: '담당자1', registrationDate: '2022-01-01', registrant: '등록자1' },
    { id: 4, title: '사이트 1', checkType: '정기', manager: '담당자1', registrationDate: '2022-01-01', registrant: '등록자1' },
    { id: 5, title: '사이트 1', checkType: '정기', manager: '담당자1', registrationDate: '2022-01-01', registrant: '등록자1' },
    { id: 6, title: '사이트 1', checkType: '정기', manager: '담당자1', registrationDate: '2022-01-01', registrant: '등록자1' },
    { id: 7, title: '사이트 1', checkType: '정기', manager: '담당자1', registrationDate: '2022-01-01', registrant: '등록자1' },
    { id: 8, title: '사이트 1', checkType: '정기', manager: '담당자1', registrationDate: '2022-01-01', registrant: '등록자1' },
    { id: 9, title: '사이트 1', checkType: '정기', manager: '담당자1', registrationDate: '2022-01-01', registrant: '등록자1' },
    { id: 10, title: '사이트 1', checkType: '정기', manager: '담당자1', registrationDate: '2022-01-01', registrant: '등록자1' },
    { id: 11, title: '사이트 1', checkType: '정기', manager: '담당자1', registrationDate: '2022-01-01', registrant: '등록자1' },
    { id: 12, title: '사이트 1', checkType: '정기', manager: '담당자1', registrationDate: '2022-01-01', registrant: '등록자1' },
    { id: 13, title: '사이트 1', checkType: '정기', manager: '담당자1', registrationDate: '2022-01-01', registrant: '등록자1' },
    { id: 14, title: '사이트 1', checkType: '정기', manager: '담당자1', registrationDate: '2022-01-01', registrant: '등록자1' },
    // ... (다른 데이터)
  ];

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // 현재 페이지의 데이터 계산
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentData = localData.slice(startIdx, endIdx);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const columns = [
    { Header: '번호', accessor: 'id' },
    { Header: '사이트 명', accessor: 'title' },
    { Header: '점검 구분', accessor: 'checkType' },
    { Header: '담당자', accessor: 'manager' },
    { Header: '등록일자', accessor: 'registrationDate' },
    { Header: '등록자', accessor: 'registrant' },
  ];

  return (
    <div className='h-screen bg-black text-white font-NanumSquare'>
      <Table columns={columns} data={currentData} />
      <Pagination pageCount={Math.ceil(localData.length / itemsPerPage)} onPageChange={handlePageChange} />
    </div>
  );
};

export default InspectionManagement;
