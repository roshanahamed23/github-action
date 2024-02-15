import React from 'react';
import { revalidateTag } from 'next/cache';

const page = () => {
    revalidateTag('users');
  return (
    <div>revalidate the fetch request in /fetch path</div>
  )
}

export default page