// CustInputBox.js
import React from 'react';

const CustInputBox = (props) => {
    const {register, errors, watch, setValue} = props.formMethods;
    const {
        label,
        type,
        name,
        maxLength,
        pattern,
        patternMessage
    } = props;

    return (
        <div className='text-left'>
            <label
                htmlFor={name}
                className={`text-gray-500 w-32 inline-block font-NanumSquare text-lg transition-colors duration-300 text-left ' ${watch(name)
                    ? 'text-white'
                    : 'text-gray-500'}`}>
                {label}
            </label>
            <input
                className='inline-block rounded-sm font-NanumRegular text-white w-60 p-3 focus:border-0 focus:outline-none focus:ring-1 focus:ring-sky-500 bg-black border-b border-white ml-2 mb-3'
                type={type}
                id={name}
                name={name}
                {...register(name, {
          onChange:(e) => {
            setValue(name, e.target.value);
          },
          required:'필수 값 입니다.',
          pattern: {
            value: new RegExp(pattern),
            message:patternMessage,
          },
          maxLength: {
            value: maxLength,
            message: `${maxLength}자 이하로 입력해주세요.`,
          },
          validate: (value) => {
            if (name === 'confirmPassword' && value !== watch('password')) {
              return '비밀번호가 일치하지 않습니다';
            }
            return undefined;
          }

        })}
                placeholder={`Enter your ${name}`}/>
            <div className='items-center flex justify-center'>
                <p
                    className={`${errors[name] && errors[name].type
                        ? 'mb-7 break-keep w-full text-left text-red-600'
                        : 'hidden'}`}>{
                        errors[name] && errors[name].type
                            ? errors[name].message
                            : ' '
                    }</p>
            </div>
        </div>
    );
};

export default CustInputBox;
