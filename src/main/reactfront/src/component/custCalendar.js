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
    { id: '3', title: '이벤트 3', date: null },
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
      const updatedEvents = events.map((event) =>
        event.id === selectedEvent.id
          ? { ...event, date: newDate, title: newText }
          : event
      );

      setEvents(updatedEvents);

      const calendarApi = calendarRef.current.getApi();
      const existingEvent = calendarApi.getEventById(selectedEvent.id);

      if (existingEvent) {
        existingEvent.setProp('title', newText);
        existingEvent.setStart(newDate);
      }
    }
    handleModalClose();
  };

  const handleEventDrop = (info) => {
    console.log('드롭한 날짜:', info.event.start);
  };

  const handleDrop = (e) => {
    e.preventDefault();
  
    const calendarApi = calendarRef.current.getApi();
    const eventId = e.dataTransfer.getData('text/plain');
    const draggedEl = document.getElementById(eventId);
  
    // 이벤트 엘리먼트의 날짜 가져오기
    const date = calendarApi.getDate(draggedEl);
  
    const updatedEvents = events.map((ev) =>
      ev.id === eventId ? { ...ev, date: date ? date.toISOString() : null } : ev
    );
  
    setEvents(updatedEvents);
  
    // handleEventDrop을 호출하여 부모 컴포넌트에 업데이트된 이벤트를 전달
    handleEventDrop({ event: { start: date } });
  };

  const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    className: 'custom-calendar',
    initialView: 'dayGridMonth',
    events: events.filter((event) => !!event.date),
    editable: true,
    eventClick: handleEventClick,
    eventDrop: handleEventDrop,
    droppable: true,
  };

  return (
    <div>
      <div className='pt-10 w-3/4 h-5/6 inline-block'>
        <h2>나만의 캘린더</h2>
        <div className="calendar-container" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
          <FullCalendar {...calendarOptions} ref={calendarRef} />
          <EventModal isOpen={modalOpen} onClose={handleModalClose} onSave={handleModalSave} initialEvent={selectedEvent} />
        </div>
      </div>
      <ListBox handleDrop={handleDrop} onEventDrop={handleEventDrop} events={events} setEvents={setEvents} calendarRef={calendarRef} />
    </div>
  );
};

export default CustCalendar;
