// Join 컴포넌트
import CustButton from 'component/successButton';
import CustInputBox from 'component/custInputBox';
import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import SuccessButton from 'component/successButton';

const Join = () => {
    const [inputBoxInfo, setinputBoxInfo] = useState([
        {
            label: '이름',
            name: 'username',
            type: 'text',
            maxLength: 10,
            pattern: /^[가-힣]+$/,
            patternMessage: '한글만 입력해주세요.'
        }, {
            label: '이메일',
            name: 'email',
            type: 'email',
            maxLength: 255,
            pattern: /\S+@example.co.kr$/,
            patternMessage: '회사 이메일 형식으로 입력해주세요.'
        }, {
            label: '비밀번호',
            name: 'password',
            type: 'password',
            maxLength: 20,
            pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
            patternMessage: '비밀번호는 6자리 이상이며 하나 이상의 알파벳,숫자,특수문자를 포함하여야 합니다.'
        }, {
            label: '비밀번호 확인',
            name: 'confirmPassword',
            type: 'password',
            maxLength: 20,
            pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
            patternMessage: '비밀번호는 6자리 이상이며 하나 이상의 알파벳,숫자,특수문자를 포함하여야 합니다.'
        }
    ]);
    const {register, handleSubmit, formState: {
            errors
        }, watch, setValue} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h2
                className='text-white absolute w-full text-center text-3xl font-NanumExBold tracking-wider select-none'>JOIN</h2>
            <div className='bg-black h-screen flex justify-center items-center'>
                <div className='w-1/4 h-5/6 rounded-xl'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {
                            inputBoxInfo.map((item) => (
                                <CustInputBox
                                    key={item.name}
                                    label={item.label}
                                    type={item.type}
                                    name={item.name}
                                    pattern={item.pattern}
                                    maxLength={item.maxLength}
                                    patternMessage={item.patternMessage}
                                    formMethods={{
                                        register,
                                        errors,
                                        watch,
                                        setValue
                                    }}/>
                            ))
                        }
                        <div className='font-NanumSquare text-center'>
                            <label
                                htmlFor='ranks'
                                className={`w-32 inline-block text-lg text-left ${watch('ranks')
                                    ? 'text-white'
                                    : 'text-gray-500'}`}>직급</label>
                            <select
                                name='ranks'
                                id='ranks'
                                className='inline-block border-white border-2 bg-black text-white w-60 text-center p-2 text-lg ml-2 mb-3 rounded-sm'
                                {...register('ranks', { required: '필수 값 입니다.' })}>
                                <option value=''>선택</option>
                                <option value="pro">프로</option>
                                <option value="manager">매니저</option>
                                <option value="leader">팀장</option>
                                <option value="executives">임원</option>
                            </select>
                            <div className='items-center flex justify-center'>
                                <p
                                    className={`${errors['ranks'] && errors['ranks'].type
                                        ? 'break-keep w-full text-left text-red-600' 
                                        : 'hidden'}`}>{
                                        errors['ranks'] && errors['ranks'].type
                                            ? errors['ranks'].message
                                            : ''
                                    }</p>
                            </div>
                        </div>
                        <div className='text-right w-full pr-12 pt-2'>
                            <SuccessButton type='submit' text='회원가입'></SuccessButton>
              
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Join;
