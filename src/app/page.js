"use client"

import './globals.css';
import Apresentacao from './components/sessions/apresentacao';
import Dicasdesaude from './components/sessions/dicasdesaude';
import { Menubar } from 'primereact/menubar';
import Image from 'next/image';
import { useRef } from 'react';



export default function Home() {
  const apresentacaoRef = useRef(null);
  const dicasdesaudeRef = useRef(null);

  const items = [
    {
      label: 'Início',
      // icon: 'pi pi-home',
      command: () => {
        apresentacaoRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      label: 'Dicas de Saúde',
      command: () => {
        dicasdesaudeRef.current.scrollIntoView({ behavior: 'smooth' });
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

  return (
    <div style={{background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(230,242,189,1) 100%)'}}>
      <div className="">
        <Menubar model={items} start={start} className='px-4 lg:px-24 border-0 w-full ml-0' style={{ background: 'linear-gradient(180deg, rgba(125,166,83,0.9) 0%, rgba(200,226,112,0.9) 100%)' }} />
      </div>
      <div ref={apresentacaoRef}>
        <Apresentacao />
      </div>
      <div ref={dicasdesaudeRef}>
        <Dicasdesaude/>
      </div>
    </div>
  );
}

