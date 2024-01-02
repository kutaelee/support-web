import React,{useEffect, useState} from 'react';
import axios from 'axios';

const MyPage = (props) => {
    const [hello, setHello] = useState([])

useEffect(() => {
    axios
        .get('/MemberSelect')
        .then(response => {
            setHello(response.data);
            console.log(response.data);
        })
        .catch(error => console.log(error))
    }, []);
    return (
        <div>
            {
                hello.map((item, index) => (
                    <div key={index}>
                        백엔드에서 가져온 데이터입니다:
                        <ul>
                            {
                                Object
                                    .keys(item)
                                    .map(
                                        (key, subIndex) => (<li key={subIndex}>
                                            {key}: {item[key]}
                                        </li>)
                                    )
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    );
        }
    export default MyPage;