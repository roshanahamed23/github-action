import React from 'react'

const page = async ({params}) => {
const rees = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
const data = await rees.json();

  return (
    <div>
        <li>{data.name}</li>
        <li>{data.email}</li>
    </div>
  )
}

export default page;