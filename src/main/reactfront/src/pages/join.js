// Join 컴포넌트
import CustInputBox from 'component/custInputBox';
import React, { useState , useEffect } from 'react';
import { useForm } from 'react-hook-form';




const Join = () => {
  const [inputBoxInfo, setinputBoxInfo] = useState([
    { label: '이름' , name: 'username' ,type: 'text', maxLength: 10 ,  pattern: '' },
     { label: '이메일' ,  name: 'email' ,type: 'email', maxLength: 255 , pattern: '' },
     { label: '비밀번호' , name: 'password' , type: 'text' , maxLength: 20 , pattern: '' },
     { label: '비밀번호 확인' , name: 'confirmPassword' , type: 'text', maxLength: 20 , pattern: '' },

  ]);
    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm();
    const onSubmit = data => console.log(data);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("hi")
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
  };

  const handleJoin = () => {
    console.log('회원가입 정보:', formData);
    console.log('click')
    // 서버로 데이터 전송 또는 다른 회원가입 처리 수행
  };


  return (
    <div>     
      <h2 className='text-white absolute w-full text-center text-3xl font-NanumExBold tracking-wider select-none'>JOIN</h2>
    <div className='bg-black h-screen flex items-center justify-center'>
         
      <div className='w-9/12 h-5/6 rounded-xl'>
  
        <form onSubmit={handleSubmit(onSubmit)}>
        {inputBoxInfo.map((item) =>(
  
          <CustInputBox  boxKey={item.name}
          label={item.label}
          type='text'
          name='username'
          formData={formData}

          pattern= '/\S+@\S+\.\S+/'
          maxLength={10}
          formMethods={{ register, errors, watch, setValue }}
       
           />   
        ))};
          <div className='text-center w-full text-white'>
          <button type='submit' className='pr-10'> 
            회원가입
          </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Join;
