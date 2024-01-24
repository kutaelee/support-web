import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import EventModal from 'component/calendarEventModal';
import ListBox from 'component/listBox';
import 'assist/css/customCalendar.css';
import koLocale from '@fullcalendar/core/locales/ko';

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

  const handleEventReceive = (info) => {
    console.log(info.event.id)

    const timezoneOffset = new Date().getTimezoneOffset() * 60000;
    const startDate = new Date(info.event.start-timezoneOffset);

    
    // 원하는 작업 수행
    console.log('Received event start date:', startDate.toISOString().slice(0, 10));
    const updatedEvents = events.map((event) =>
    event.id === info.event.id
      ? { ...event, date: startDate.toISOString().slice(0, 10) }
      : event
  );

    setEvents(updatedEvents);
    console.log(events)

  };

  const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    className: 'custom-calendar',
    initialView: 'dayGridMonth',
    events: events.filter((event) => !!event.date),
    editable: true,
    eventClick: handleEventClick,
    droppable: true,
    eventReceive: handleEventReceive,
    locale: koLocale
  };

  return (
    <div>
      <div className='pt-10 w-3/4 h-5/6 inline-block'>
        <h2>나만의 캘린더</h2>
        <div className="calendar-container"  onDragOver={(e) => e.preventDefault()}>
          <FullCalendar {...calendarOptions} ref={calendarRef} />
          <EventModal isOpen={modalOpen} onClose={handleModalClose} onSave={handleModalSave} initialEvent={selectedEvent} />
        </div>
      </div>
      
      <ListBox events={events} setEvents={setEvents} calendarRef={calendarRef}  />
    </div>
  );
};

export default CustCalendar;
