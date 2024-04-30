"use client"

import Image from 'next/image'; 
import React, { useState, useEffect } from 'react'; 
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Link from "next/link";
import './globals.css';
import Botoes from './components/sessaoInicial/buttons';
import FotoLosango from './components/sessaoInicial/imagemLosango';
import FotoLosangoMobile from './components/sessaoInicial/imagemLosangoMobile';
import LogoNome from './components/sessaoInicial/logoNome';
import TextoApoio from './components/sessaoInicial/textoApoio';
import DivVerde from './components/sessaoInicial/linhaVerde';
import NomeDra from './components/sessaoInicial/nomeDra';
import Menubar from './components/sessaoInicial/menuBar';


export default function Home() {

    const [isMobile, setIsMobile] = useState(false);
  
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
  

  return (
    <div>
      {isMobile ? (
        <div className='h-[100dvh]' style={{background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(230,242,189,1) 100%)'}}>

          <div className='pt-7 flex justify-center'>
            <LogoNome/>
          </div>
          <div className='mt-3'>
          <TextoApoio/>
          </div>
          <DivVerde/>
          <div className='flex justify-center'>
            <FotoLosangoMobile/>
          </div>
          <div className='pb-7'>
          <Botoes/>
          </div>
        </div>
      ) : (
        <div>
          <div className='pt-5 px-16 pb-10 h-[100dvh]' style={{background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(230,242,189,1) 100%)'}}>
          <div className=''>
          <Menubar/>
          </div>
          <div className='-mt-14 flex justify-evenly items-center'>
            <div className='text-start'>
            <NomeDra/>
            <DivVerde/>
            <div>
            <TextoApoio/>
            </div>
            <div>
          <Botoes/>
          </div>
          </div>
          <div>
          <FotoLosango/>
          </div>
          </div>
          </div>
        </div>
      )}
    </div>

    
  );
}

