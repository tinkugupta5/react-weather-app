// https://jsonplaceholder.typicode.com/users

import React from 'react'
import { useEffect,useState } from 'react'

const Api = () => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        const fetchapi = async() => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            console.log(data)
            setUsers(data);
        }
       fetchapi()
    },[])
   
  return (
    users.map((user,index)=>(
        <>
        <div key={index}>
            <h1>{user.name}</h1>
            <h2>{user.name}</h2>
            <h3>{user.phone}</h3>
        </div>
        </>
    ))
  )
}

export default Api

