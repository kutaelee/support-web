import React,{useState} from 'react';

const UserSelectBox = ({onUserSelectedChange}) => {
    const [users, setUsers] = useState([
        {name:'이규태' , color:'red'},
        {name:'홍길동' , color:'teal'},
        {name:'김메타' , color:'orange'},
    ]);


    const handleCheckboxChange = (name , checked) => {
        onUserSelectedChange(name , checked)
    };
    return (

        <div className='w-full text-right mt-10 mb-2 text-white'>
            <div>

            {users.map(
          (user) =>
           
          <label key={user.name} className='ml-5'>
          <input
              className={`mr-1 accent-${user.color}-500 `}
              type='checkbox'
              id={user.name}
              defaultChecked={true}
              onChange={(e) => handleCheckboxChange(user.name , e.target.checked)}
              />
          {user.name}
      </label>
        )}

               
            </div>
        </div>
    );
};

export default UserSelectBox;
