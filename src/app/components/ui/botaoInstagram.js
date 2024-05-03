"use client"

import React from 'react';
import { Button } from 'primereact/button';
import { trackGAEvent } from '@/app/utilities/google-analytics';

export default function BotaoInstagram() {
  function handleClick(event) {
    trackGAEvent("Clique Botão Instagram", "redirect", "Botoes");
  }

  return (
    <a href="https://www.instagram.com/anabsquadri" target="_blank" rel="noopener noreferrer">
      <Button className='mt-5 lg:mt-0' label="Me siga no Instagram" icon="pi pi-instagram" severity='warning' onClick={handleClick} />
    </a>
  );
}
