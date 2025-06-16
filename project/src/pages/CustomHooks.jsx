import React from 'react';
import useFetch from './useFetch';
const CustomHooks=()=> {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}


export default CustomHooks;