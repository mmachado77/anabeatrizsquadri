"use client"

import React, { useRef } from 'react';
import './globals.css';
import Apresentacao from './components/sessions/apresentacao';
import Dicasdesaude from './components/sessions/dicasdesaude';
import Servicos from './components/sessions/servicos';
import Local from './components/sessions/local';
import Creditos from './components/sessions/creditos';
import { Menubar } from 'primereact/menubar';
import Image from 'next/image';

export default function Home() {
  const apresentacaoRef = useRef(null);
  const dicasdesaudeRef = useRef(null);
  const servicos = useRef(null);
  const local = useRef(null);

  

  const items = [
    {
      label: 'Início',
      command: () => {
        scrollToSession(apresentacaoRef);
      }
    },
    {
      label: 'Serviços',
      command: () => {
        scrollToSession(servicos);
      }
    },
    {
      label: 'Dicas de Saúde',
      command: () => {
        scrollToSession(dicasdesaudeRef);
      }
    },
    {
      label: 'Local',
      command: () => {
        scrollToSession(local);
      }
    },
    
  ];

  const start = (
    <Image 
      src="/logo-menu.png" 
      alt="logo" 
      width={50} 
      height={50} 
      className="mr-8" 
    />
  );

  const scrollToSession = (ref) => {
    const yOffset = -65; // Ajuste de deslocamento para baixo, ajuste conforme necessário
    const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <div className='' style={{background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(230,242,189,1) 100%)'}}>
      <div className="">
        <Menubar model={items} start={start} className='px-4 lg:px-24 border-0 w-full ml-0' style={{ background: 'linear-gradient(180deg, rgba(125,166,83,0.9) 0%, rgba(200,226,112,0.9) 100%)' }} />
      </div>
      <div ref={apresentacaoRef}>
        <Apresentacao />
      </div>
      <div ref={servicos}>
        <Servicos/>
      </div>
      <div ref={dicasdesaudeRef}>
        <Dicasdesaude/>
      </div>
      <div ref={local}>
        <Local/>
        <Creditos/>
      </div>
      
    </div>
  );
}