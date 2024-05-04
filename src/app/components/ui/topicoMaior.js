import Image from 'next/image';
import React from 'react';

function Topico(props) {
  return (
    <div className='my-3' style={{ display: 'flex', alignItems: 'center' }}>
      <label style={{ display: 'flex', alignItems: 'center', marginRight: '8px' }}>
        <Image 
          src='/favicon.svg' 
          alt="Ícone Logo" 
          width={25} 
          height={25} 
          priority
        />
        <span className='lg:text-xl font-bold ml-2'>{props.text}</span>
      </label>
    </div>
  );
}

export default Topico;
