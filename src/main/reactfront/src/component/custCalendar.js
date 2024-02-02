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
    {name:'이규태', id: '1', title: '이벤트이벤트이벤트이벤트이벤트 1', date: '2024-02-12' , description:'설명 블라블라', view:true , backgroundColor:'red' , borderColor:'red'},
    {name:'홍길동', id: '2', title: '이벤트 2', date: '2024-02-15' , description:'설명 블라블라', view:true , backgroundColor:'teal' , borderColor:'teal'},
    {name:'김메타', id: '3', title: '이벤트 3', date: null , description:'', view:true , backgroundColor:'orange' , borderColor:'orange'},
    {name:'김메타', id: '4', title: '이벤트 3', date: null , description:'', view:true , backgroundColor:'orange' , borderColor:'orange'},
    {name:'김메타', id: '5', title: '이벤트 3', date: null , description:'', view:true , backgroundColor:'orange' , borderColor:'orange'},
    {name:'김메타', id: '6', title: '이벤트 3', date: null , description:'', view:true , backgroundColor:'orange' , borderColor:'orange'},
  ]);
  useEffect(()=>{
    console.log(events)
  },[events])
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

  const handleEventDrop = (info) => {
    const timezoneOffset = new Date().getTimezoneOffset() * 60000;
    const startDate = new Date(info.event.start-timezoneOffset);
    const updatedEvents = events.map((event) =>
      event.id === info.event.id
        ? { ...event, date: startDate.toISOString().slice(0, 10) }
        : event
    );
    setEvents(updatedEvents);
  };


  const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    events: events.filter((event) => !!event.date && !!event.view),
    editable: true,
    eventClick: handleEventClick,
    droppable: true,
    eventReceive: handleEventReceive,
    locale: koLocale,
    eventDrop: handleEventDrop,
    dayMaxEventRows: true,
    height:'85vh',

  };

  const onEventDelete=(id) =>{
    //axios로 db에서 삭제 후 promise로 풀캘린더에서 삭제
    const calendarApi = calendarRef.current.getApi();
    const existingEvent = calendarApi.getEventById(id);
    existingEvent.remove();
    console.log(id)
  }

  const onUserSelectedChange=(name ,checked) =>{
      const updatedEvents = events.map((event) =>
      event.name === name
        ? { ...event, view:checked}
        : event
    );
    setEvents(updatedEvents);
   
  }
  return (
    <div>
      <div className='h-screen w-3/4 inline-block ml-5 font-NanumSquare'>
      <UserSelectBox onUserSelectedChange={onUserSelectedChange}/>
        <div className='calendar-container'>
          <FullCalendar {...calendarOptions} ref={calendarRef} />
          <EventModal isOpen={modalOpen} onClose={handleModalClose} onSave={handleModalSave} initialEvent={selectedEvent} onEventDelete={onEventDelete} />
        </div>
      </div>

      <ListBox events={events} setEvents={setEvents} calendarRef={calendarRef} />
    </div>
  );
};

export default CustCalendar;
