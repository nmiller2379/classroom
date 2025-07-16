import React from 'react';
import Button from '../Button/Button';

export default function CartItem({ item, onRemove }) {
  return (
    <div key={item.id}>
      {item.name} - ${item.price}
      <Button onClick ={() => onRemove(item.id)} message="Remove" />  
    </div>
  );
}


