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
        <tbody>
          {data.map((row) => (
            <tr className='bg-gray-700' key={row.id}>
              {columns.map((column) => (
                <td className='h-1' key={column.accessor}>{row[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
