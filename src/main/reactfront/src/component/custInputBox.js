// CustInputBox.js
import React from 'react';

const CustInputBox = (props) => {
  const { register, errors, watch, setValue } = props.formMethods;
  const { label, type, name, maxLength, pattern } = props;

  return (
    <div className='item-center text-center'>
      <label htmlFor={name} className={`text-gray-500 w-32 inline-block font-NanumSquare text-lg transition-colors duration-300 text-right' ${watch(name) ? 'text-white' : 'text-gray-500'}`}>
        {label}
      </label>
      <input
        className='rounded-sm font-NanumRegular text-white w-60 p-3 focus:border-0 focus:outline-none focus:ring-1 focus:ring-sky-500 bg-black border-b border-white ml-2 mb-3'
        type={type}
        id={name}
        name={name}
        onChange={(e) => {
          setValue(name, e.target.value);
        }}
        {...register(name, {
          pattern: {
            value: pattern,
            message: 'Invalid email address',
          },
          maxLength: {
            value: maxLength,
            message: `Name must be at most ${maxLength} characters`,
          },
        })}
        placeholder={`Enter your ${name}`}
      />
      <span className={`${errors[name] && errors[name].type ? 'block text-red-600' : 'hidden'}`}>{errors[name] && errors[name].type ? '잘못된 형식입니다' : ''}</span>
    </div>
  );
};

export default CustInputBox;
