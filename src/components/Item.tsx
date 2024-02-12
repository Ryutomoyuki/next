
import React from 'react';

interface ItemProps {
  id: number;
  title: string;
  description: string;
}

const Item: React.FC<ItemProps> = ({ id, title, description }) => {
  return (
    <div className="border p-4 my-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Item;
