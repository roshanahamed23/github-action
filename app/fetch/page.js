import React from 'react'

 const Fetch = async() => {
   const res= await fetch("https://jsonplaceholder.typicode.com/todos/1",{next:{tags:['users']}});
   const data= await res.json()

  return (
    <div>fetch:
        {data.userId}
    </div>
  )
}
export default Fetch;
