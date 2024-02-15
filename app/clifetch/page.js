'use client';
import Link from 'next/link';
import React, { useEffect,useState } from 'react';
import {serveraction} from '/app/serveraction'

const page = () => {
    const [users,setUsers] =useState([]);
    useEffect(() => {
    async function res(){
      const res= await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);}
      res();
    }, [])
    
  return (
    <div>{users?.map((user)=>{return(<li key={user.id}>
      <Link href={`clifetch/user/${user.id}`}>{user.name}</Link>
      </li>)})}
      <button onClick={serveraction} style={{border:'1px solid black'}}>click me here to check server action</button>
      </div>
  ) 
}
export default page;