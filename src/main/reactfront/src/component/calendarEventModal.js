// CalendarEventModal.js
import React, {useState, useEffect} from 'react';

const CalendarEventModal = ({isOpen, onClose, onSave, initialEvent, onEventDelete}) => {
    const [newDate, setNewDate] = useState('');
    const [newText, setNewText] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [selectedEventId, setSelectedEventId] =useState('');

    useEffect(() => {
      console.log(initialEvent)
        if (initialEvent) {
            const newDateWithMillis = new Date(initialEvent.startStr);
            setNewDate(newDateWithMillis.toISOString().slice(0, 10));
            setNewText(initialEvent.title || ''); 
            setNewDescription(initialEvent.extendedProps.description || '');
            setSelectedEventId(initialEvent.id);
        }
    }, [initialEvent]);

    const handleSave = () => {
        onSave(newDate, newText, newDescription);
        onClose();
    };
    const handleDelete = () => {
      onEventDelete(selectedEventId);
      onClose();
  };
    return (
        <div
            className={`w-1/4 h-2/4 bg-gray-600 opacity-95 z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isOpen
                ? 'block'
                : 'hidden'}`}>
            <div className='modal-content shadow-md p-4 h-full'>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-lg font-semibold mb-2 text-white'>이벤트 변경</h2>
                    <button
                        className='bg-red-500 text-white px-4 py-2 rounded'
                        onClick={handleDelete}>삭제</button>
                </div>
                <label className='block mb-2'>이름
                    <input
                        className='border rounded p-1 w-full'
                        type='text'
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}/>
                </label>
                <label className='block mb-2'>날짜
                    <input
                        className='border rounded p-1 w-full'
                        type='date'
                        value={newDate}
                        onChange={(e) => setNewDate(e.target.value)}/>
                </label>
                <label className='block mb-2'>설명
                    <textarea  className='border rounded p-1 w-full h-24 max-h-40'
                        type='textarea'
                        maxLength='500'
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        />              
                </label>
                <div className='flex justify-center'>
                <button
                    className='bg-blue-500 text-white px-4 py-2 rounded mr-2'
                    onClick={handleSave}>저장</button>

                <button
                    className='bg-gray-300 text-gray-700 px-4 py-2 rounded'
                    onClick={onClose}>닫기</button>
                </div>
            </div>
        </div>

    );
};

export default CalendarEventModal;
