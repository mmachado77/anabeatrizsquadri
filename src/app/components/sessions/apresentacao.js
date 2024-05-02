"use client"

import Botoes from '../sessions/sessaoInicial/buttons'
import FotoLosango from '../sessions/sessaoInicial/imagemLosango';
import FotoLosangoMobile from '../sessions/sessaoInicial/imagemLosangoMobile';
import LogoNome from '../sessions/sessaoInicial/logoNome';
import TextoApoio from '../sessions/sessaoInicial/textoApoio';
import DivVerde from '../sessions/sessaoInicial/linhaVerde';
import NomeDra from '../sessions/sessaoInicial/nomeDra';
import Menubar from '../sessions/sessaoInicial/menuBar';
import React, { useState, useEffect } from 'react'; 

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

    return (
        <div>
          {isMobile ? (
            <div className='' style={{background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(230,242,189,1) 100%)'}}>
    
              <div className='pt-7 flex justify-center'>
                <div className='mt-16'>
                <LogoNome/>
                </div>
                
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
              <div className='pt-5 px-16 pb-10' style={{background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(230,242,189,1) 100%)'}}>

              <div className='mt-16 flex justify-evenly items-center'>
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
