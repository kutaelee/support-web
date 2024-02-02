import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit ,watch } = useForm();

  const onSubmit = (data) => {
    // 여기에서 폼 데이터를 처리합니다.
    console.log(data);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-black text-white font-NanumSquare'>
      <div className='max-w-sm w-full p-6 bg-black shadow-md rounded-md h-96'>
        <h2 className='text-2xl font-semibold mb-6 tracking-wider'>로그인</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label htmlFor='username' className={`transition text-gray-600  block text-sm mb-2 ${watch('username') ? 'text-white' : 'text-gray-600'}`}>
              사용자 이름
            </label>
            <input
              type='text'
              id='username'
              name='username'
              {...register('username')}
              className='w-full p-2 border border-gray-300 rounded-md bg-black text-white'
              placeholder='사용자 이름을 입력하세요.'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className={`block text-gray-600 text-sm font-NanumSquare mb-2 ${watch('password') ? 'text-white' : 'text-gray-600'}`}>
              비밀번호
            </label>
            <input
              type='password'
              id='password'
              name='password'
              {...register('password')}
              className='w-full p-2 border font-NanumRegular border-gray-300 rounded-md bg-black text-white'
              placeholder='비밀번호를 입력하세요.'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition duration-300'
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
