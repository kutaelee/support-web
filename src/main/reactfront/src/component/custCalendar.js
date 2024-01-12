import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import EventModal from 'component/calendarEventModal';
import 'assist/css/customCalendar.css';

const CustCalendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([
    { id: '1', title: '이벤트 1', date: '2024-01-12' },
    { id: '2', title: '이벤트 2', date: '2024-01-15' },
    // 추가적인 이벤트들...
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
      const updatedEvents = events.map(event => {
        if (event.id === selectedEvent.id) {
          return {
            ...event,
            start: newDate,
            title: newText,
          };
        }
        return event;
      });

      setEvents(updatedEvents);

      // DB에 변경된 값을 저장하는 로직 추가
      // saveToDatabase(updatedEvents);

      // FullCalendar에 변경된 이벤트를 반영
      calendarRef.current.getApi().addEventSource(updatedEvents);
    }
    handleModalClose(); // 모달 닫기
  };

  const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    className: 'custom-calendar',
    initialView: 'dayGridMonth',
    events: events,
    editable: true,
    eventClick: handleEventClick,
  };

  return (
    <div className='pt-10 w-3/4 h-5/6'>
      <h2>나만의 캘린더</h2>
      <div className="calendar-container">
        <FullCalendar {...calendarOptions} ref={calendarRef} />
        <EventModal isOpen={modalOpen} onClose={handleModalClose} onSave={handleModalSave} initialEvent={selectedEvent} />
      </div>
    </div>
  );
};

export default CustCalendar;
