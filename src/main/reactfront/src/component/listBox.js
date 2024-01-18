// ListBox.js

const ListBox = ({ events, onDragStart, onDragEnd, onEventDrop }) => {
  
    const handleDragStart = (event, jsEvent) => {
      onDragStart(event, jsEvent);
    };
  
    const handleDragEnd = (event, jsEvent) => {
        const updatedEvents = events.map((ev) => {
            if (ev.id === event.id) {
              return {
                ...ev,
                date: '2024-01-15', // 여기서 실제로 드롭된 날짜로 업데이트
              };
            }
            return ev;
          });
      
          // 부모 컴포넌트로 업데이트된 이벤트 전달
        onEventDrop(updatedEvents);
      onDragEnd(event, jsEvent);
    };
  
    const handleDragOver = (e) => {
      e.preventDefault(); // 드래그 앤 드롭을 허용하려면 반드시 호출해야 합니다.
    };
  
    return (
      <div className='inline-block w-1/5 h-5/6 absolute ml-12 mt-32 bg-gray-600'>
        <h2 className='p-3 text-center bg-gray-700 rounded-md h-14 font-NanumSquare tracking-wider text-xl font-semibold text-neutral-100'>
          일정 목록
        </h2>
        <ul>
          {events.map((event) => (
            <li
              key={event.id}
              draggable
              onDragStart={(e) => handleDragStart(event, e)}
              onDragEnd={(e) => handleDragEnd(event, e)}
              onDragOver={handleDragOver} // 드래그 중일 때 드롭을 허용
          
            >
              {event.title}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ListBox;
  