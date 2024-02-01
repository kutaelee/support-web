import React, { useState, useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import EventModal from 'component/calendarEventModal';
import ListBox from 'component/listBox';
import 'assist/css/customCalendar.css';
import koLocale from '@fullcalendar/core/locales/ko';
import UserSelectBox from './userSelectBox';

const CustCalendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([
    { id: '1', title: '이벤트 1', date: '2024-02-12' , description:'설명 블라블라'},
    { id: '2', title: '이벤트 2', date: '2024-02-15' , description:'설명 블라블라'},
    { id: '3', title: '이벤트 3', date: null , description:''},
  ]);
  useEffect(()=>{
    console.log(events)
  })
  const calendarRef = useRef(null);

  const handleEventClick = (info) => {
    info.jsEvent.preventDefault();
    console.log(info.event)
    setSelectedEvent(info.event);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalSave = (newDate, newText, newDescription) => {
    if (selectedEvent) {
      const updatedEvents = events.map((event) =>
        event.id === selectedEvent.id
          ? { ...event, date: newDate, title: newText, description: newDescription}
          : event
      );

      setEvents(updatedEvents);
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


  };


  const handleEventDragStop = (info) => {
    const jsEvent = info.jsEvent;

    // 원하는 작업 수행
    console.log('Dragged event:', jsEvent);
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
    locale: koLocale,
    eventDragStop: handleEventDragStop
  };

  const onEventDelete=(id) =>{
    //axios로 db에서 삭제 후 promise로 풀캘린더에서 삭제
    const calendarApi = calendarRef.current.getApi();
    const existingEvent = calendarApi.getEventById(id);
    existingEvent.remove();
    console.log(id)
  }
  return (
    <div>
      <div className='pt-10 w-3/4 h-5/6 inline-block'>
      <UserSelectBox />
        <div className="calendar-container" >
          <FullCalendar {...calendarOptions} ref={calendarRef} />
          <EventModal isOpen={modalOpen} onClose={handleModalClose} onSave={handleModalSave} initialEvent={selectedEvent} onEventDelete={onEventDelete} />
        </div>
      </div>

      <ListBox events={events} setEvents={setEvents} calendarRef={calendarRef} />
    </div>
  );
};

export default CustCalendar;
