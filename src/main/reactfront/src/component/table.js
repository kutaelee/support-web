// Table.js
import React from 'react';

const Table = ({ columns, data }) => {
  return (
    <div className='w-full h-5/6 flex justify-center items-center mb-5'>
      <table className='w-3/4 h-full text-center'>
        <thead>
          <tr className='h-10 bg-gray-950 w-full '>
            {columns.map((column) => (
              <th key={column.Header}>{column.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody className='bg-gray-700'>
          {data.map((row) => (
            <tr className=' cursor-pointer hover:bg-neutral-100 hover:text-black' key={row.id}>
              {columns.map((column) => (
                <td className='h-1 px-2 max-w-96 whitespace-nowrap overflow-hidden text-ellipsis' key={column.accessor}>{row[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
