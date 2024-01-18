// CustCalendar.js

import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import EventModal from 'component/calendarEventModal';
import ListBox from 'component/listBox';
import 'assist/css/customCalendar.css';

const CustCalendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([
    { id: '1', title: '이벤트 1', date: '2024-01-12' },
    { id: '2', title: '이벤트 2', date: '2024-01-15' },
    { id: '3', title: '이벤트 3', date: null }, // 날짜가 없는 이벤트
  ]);
  const calendarRef = useRef(null);

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalSave = (newDate, newText) => {
    if (selectedEvent) {
      console.log(`이벤트의 새로운 날짜: ${newDate}`);
      console.log(`이벤트의 새로운 텍스트: ${newText}`);

      // events 상태를 업데이트
      const updatedEvents = events.map((event) => {
        if (event.id === selectedEvent.id) {
          return {
            ...event,
            date: newDate,
            title: newText,
          };
        }
        return event;
      });

      setEvents(updatedEvents);

      // FullCalendar에 변경된 이벤트를 반영
      const calendarApi = calendarRef.current.getApi();
      const existingEvent = calendarApi.getEventById(selectedEvent.id);

      if (existingEvent) {
        existingEvent.setProp('title', newText);
        existingEvent.setStart(newDate);
      }
    }
    handleModalClose(); // 모달 닫기
  };

  const handleDragStart = (event, jsEvent) => {
    // 드래그가 시작될 때 실행되는 로직
    console.log('드래그 시작:', event);
  };

  const handleDragEnd = (event, jsEvent) => {
    // 드래그가 종료될 때 실행되는 로직
    console.log('드래그 종료:', jsEvent);
    
  };

  const handleEventDrop = (updatedEvents) => {
    // 풀캘린더의 events 상태를 업데이트
    setEvents(updatedEvents);
    console.log('드롭한 날짜:', updatedEvents.date);
  };

  const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    className: 'custom-calendar',
    initialView: 'dayGridMonth',
    events: events.filter((event) => !!event.date), // 날짜가 있는 이벤트만 표시
    editable: true,
    eventClick: handleEventClick,
  };

  return (
    <div>
    <div className='pt-10 w-3/4 h-5/6 inline-block'>
      <h2>나만의 캘린더</h2>
      <div className="calendar-container">
        <FullCalendar {...calendarOptions} ref={calendarRef} />
        <EventModal isOpen={modalOpen} onClose={handleModalClose} onSave={handleModalSave} initialEvent={selectedEvent} />
      </div>
     
    </div>
     <ListBox onDragStart={handleDragStart} onDragEnd={handleDragEnd} onEventDrop={handleEventDrop} events={events} />
     </div>
  );
};

export default CustCalendar;
