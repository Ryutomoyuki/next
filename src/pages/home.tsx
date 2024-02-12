
import React from 'react';
import Link from 'next/link';
import data from '../data.json';
import Item from '../components/Item';

const Home: React.FC = () => {
  return (
    <div className="big-scroll" >
      <h1 className="text-2xl text-center p-4">About me</h1>
      {data.map(item => (
        <Item key={item.id} {...item} />
      ))}
      <div className="mt-4">
        <Link className="text-blue-500" href="/contact">
          My contact information
        </Link>
      </div>
    </div>
  );
};

export default Home;
