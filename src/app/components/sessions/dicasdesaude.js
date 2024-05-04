"use client"

import React, { useState, useEffect } from 'react'; 
import { InstagramEmbed, } from 'react-social-media-embed';
import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';
import DicasTitulo from './sessaoInstagram/dicasTitulo';
import TextoApoioInstagram from './sessaoInstagram/textoApoio';
import DivVerde from './sessaoInicial/linhaVerde';
import BotaoInstagram from '../ui/botaoInstagram';
import { trackGAEvent } from '@/app/utilities/google-analytics';

export default function Apresentacao(...props) {
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
  
  function handleClick(event) {
    trackGAEvent("Clique video Instagram", "redirect", "Botoes");
  }

    return (
        <div>
          {isMobile ? (
            <div className='pt-5 px-5 pb-10'>
            <div className="text-center">
            <div className='max-w-[1000px]'>
            <DivVerde/>
                    <DicasTitulo/>
                    

                    <TextoApoioInstagram/>                   
                </div>
                
                <div className='mt-5 flex justify-center' onClick={handleClick}>
                    <InstagramEmbed url="https://www.instagram.com/reel/C6M42DdOWTt/" width={328}  />
                </div>
                <div className='flex justify-center'>
                    <BotaoInstagram/>
                </div>
                
                
            </div>
            </div>
          ) : (
            <div className='mt-16 pt-5 px-16 pb-10'>
            <div className="flex justify-center items-center gap-24">
            <div className='max-w-[1000px]'>
                    <DicasTitulo/>
                    <DivVerde/>
                    <TextoApoioInstagram/>
                    <div className='mt-5 flex justify-center'>
                    <BotaoInstagram/>
                    </div>
                    
                </div>
                <div onClick={handleClick}>
                    <InstagramEmbed url="https://www.instagram.com/reel/C6M42DdOWTt/" width={328}  />
                </div>
                
            </div>
            </div>
          )}
        </div>
    
        
      );
}
