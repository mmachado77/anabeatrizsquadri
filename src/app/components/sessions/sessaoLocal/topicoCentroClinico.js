import Image from 'next/image';
import React from 'react';

function TopicoCentroClinico(props) {
  return (
    <div className='my-3' style={{ display: 'flex', alignItems: 'center' }}>
      <label style={{ display: 'flex', alignItems: 'center', marginRight: '8px' }}>
        <Image 
          src='/logo-branco.svg' 
          alt="Ícone Logo" 
          width={25} 
          height={25} 
          
        />
        <span className='text-white lg:text-xl font-bold ml-2'>{props.text}</span>
      </label>
    </div>
  );
}

export default TopicoCentroClinico;
