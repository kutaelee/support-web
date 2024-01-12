// CalendarEventModal.js
import React, { useState, useEffect } from 'react';

const CalendarEventModal = ({ isOpen, onClose, onSave, initialEvent }) => {
  const [newDate, setNewDate] = useState('');
  const [newText, setNewText] = useState('');

  useEffect(() => {
    // 초기 이벤트가 변경될 때마다 날짜와 텍스트를 업데이트
    if (initialEvent) {
      const newDateWithMillis = new Date(initialEvent.startStr).toISOString().slice(0, 16); // UTC 시간으로 변환하고 시간 포맷 조절
      setNewDate(newDateWithMillis);
      setNewText(initialEvent.title || ''); // 이벤트에 설명이 있는 경우 표시
    }
  }, [initialEvent]);

  const handleSave = () => {
    onSave(newDate, newText);
    onClose();
  };

  return (
    <div className={`z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal-content bg-white shadow-md p-4">
        <h2 className="text-lg font-semibold mb-2">이벤트 날짜 및 시간 변경</h2>
        <label className="block mb-2">이벤트 정보:
          <input className="border rounded p-1 w-full" type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
        </label>
        <label className="block mb-2">새로운 날짜 및 시간:
          <input className="border rounded p-1 w-full" type="datetime-local" value={newDate} onChange={(e) => setNewDate(e.target.value)} />
        </label>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={handleSave}>저장</button>
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded" onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default CalendarEventModal;
