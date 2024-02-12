
import React from 'react';
import Link from 'next/link';
import data from '../data.json';
import Item from '../components/Item';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My contact information</h1>
      <p>WhatsApp Number: +1 (334) 400-9903 </p>
      <p>Telegram Username : passionman99 </p>
      <p>Skype Name: live:.cid.d022e4283a8cc079 </p>
      <p className='italic'>Thank you for your consideration.<br/>
        I will do my best with my infinite passion if you award me this project.<br/>
        I can provide as free at first until I satisfy you.<br/>
        It is expected to about one week.<br/>
        Looking froward to potential collaborating!
      </p>
      

      <div className="mt-4">
        <Link className="text-blue-500" href="/home">
          Go to home
        </Link>
      </div>
    </div>
  );
};

export default About;
