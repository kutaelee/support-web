const ListBox = ({ events, setEvents, calendarRef, handleEventDrop }) => {
  const handleDragStart = (event, e) => {
    e.dataTransfer.setData('text/plain', event.id);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const calendarApi = calendarRef.current.getApi();
    const { x, y } = e;
    const date = calendarApi.getDateFromEventProps({ x, y, type: 'drag' });

    const eventId = e.dataTransfer.getData('text/plain');
    const updatedEvents = events.map((ev) =>
      ev.id === eventId ? { ...ev, date: date ? date.toISOString() : null } : ev
    );

    setEvents(updatedEvents);

    // handleEventDrop을 호출하여 부모 컴포넌트에 업데이트된 이벤트를 전달
    handleEventDrop({ event: { start: date } });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className='inline-block w-1/5 h-5/6 absolute ml-12 mt-32 bg-gray-600'>
      <h2 className='p-3 text-center bg-gray-700 rounded-md h-14 font-NanumSquare tracking-wider text-xl font-semibold text-neutral-100'>
        일정 목록
      </h2>
      <ul>
        {events.map(
          (event) =>
            event.date == null && (
              <li
                key={event.id}
                draggable
                onDragStart={(e) => handleDragStart(event, e)}
                onDrop={(e) => handleDrop(e)}
                onDragOver={handleDragOver}
              >
                {event.title}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default ListBox;
