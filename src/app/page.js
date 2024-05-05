"use client"

import React, { useEffect, useRef, useState } from 'react';
import { UseScrollPosition } from './components/hooks/useScrollPosition';
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
  const [isMobile, setIsMobile] = useState(false);
  const scrollPosition = UseScrollPosition();

  useEffect(() => {
    // Função para verificar se a tela é mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Defina o ponto de quebra para dispositivos móveis
    };

    // Verificar o tamanho da tela quando a janela é redimensionada
    window.addEventListener('resize', checkIsMobile);

    // Verificar o tamanho da tela na montagem do componente
    checkIsMobile();

    // Limpar o event listener quando o componente é desmontado
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

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
      className="mr-8 cursor-pointer" 
      onClick={ () => scrollToSession(apresentacaoRef)}
    />
  );

  const scrollToSession = (ref) => {
    let yOffset = isMobile ? -65 : -155
    if(scrollPosition<=81) {
      yOffset-=81;
    } // Ajuste de deslocamento para baixo, ajuste conforme necessário
    const y = ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <div className='' style={{background: 'linear-gradient(180deg, #e7f7b1 0%, #fff 35%, #fff 55%, #e7f7b1 100%)'}}>
      <div className={classNames(
        scrollPosition > 81 ? 'fixed shadow-md bg-white/[98%] menubarAnimacao ' : '',
        'z-50 bg-white/0 w-full',
      )}>
        <Menubar model={items} start={start} className=
        'pt-5 px-4 border-0 max-w-screen-xl mx-auto bg-white/0'
      />
        

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
      <div className=''>
        <Local/>
        <div ref={local}>
        <Creditos/>
        </div>
      </div>
      
    </div>
  );
}