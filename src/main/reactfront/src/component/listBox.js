import React, { useRef, useEffect } from 'react';
import { Draggable } from '@fullcalendar/interaction';

const DraggableListBoxItem = ({eventData}) => {
  const externalEventRef = useRef(null);

  useEffect(() => {
    const externalDraggable = new Draggable(externalEventRef.current, {
      eventData: () => ({ title: eventData.title , id: eventData.id }),   
    });

    // 컴포넌트가 언마운트될 때 Draggable 인스턴스를 소멸시킵니다.
    return () => {
      externalDraggable.destroy();
    };
  }, [eventData]);

  return (
    <li
    className='fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past fc-daygrid-event fc-daygrid-block-event fc-h-event'
      ref={externalEventRef}
      draggable='true'
    >
      {eventData.title}
    </li>
  );
};


const ListBox = ({ events }) => {

const handleDragOver = (e) => {
  e.preventDefault(); // 이 부분이 추가되어야 합니다.
};

  return (
    <div className='inline-block w-1/5 h-5/6 absolute ml-12 mt-32 bg-gray-600'  onDragOver={handleDragOver} draggable='true'>
      <h2 className='p-3 text-center bg-gray-700 rounded-md h-14 font-NanumSquare tracking-wider text-xl font-semibold text-neutral-100'>
        일정 목록
      </h2>
      <ul>
        {events.map(
          (event) =>
            !event.date && (
              <DraggableListBoxItem
                key={event.id}
                eventData={event}
              />
            )
        )}
      </ul>
    </div>
  );
};

export default ListBox;
