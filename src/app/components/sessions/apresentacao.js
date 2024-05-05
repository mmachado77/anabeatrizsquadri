"use client"

import Botoes from '../sessions/sessaoInicial/buttons'
import FotoLosango from '../sessions/sessaoInicial/imagemLosango';
import FotoLosangoMobile from '../sessions/sessaoInicial/imagemLosangoMobile';
import LogoNome from '../sessions/sessaoInicial/logoNome';
import TextoApoio from '../sessions/sessaoInicial/textoApoio';
import DivVerde from '../sessions/sessaoInicial/linhaVerde';
import NomeDra from '../sessions/sessaoInicial/nomeDra';
import Menubar from '../sessions/sessaoInicial/menuBar';
import Topico from '../ui/topico';
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
            <div className='' >
    
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
              <div className='mx-8'>
              <Topico text="Há 17 anos atuando no mercado"/>
              <Topico text="Medicina atualizada e baseada em evidências"/>
              <Topico text="Diagnóstico e tratamento claro e objetivo"/>
              <Topico text="Rotineira da emergência do Hospital Mãe de Deus"/>
              <Topico text="Socorrista do SAMU POA"/>
              <Topico text="Cursando pós graduação em Nutrologia"/>
              </div>
              <div className='pb-7'>
              <Botoes/>
              </div>
            </div>
          ) : (
            <div>
              <div className='pt-5 px-8 pb-10'>

              <div className='mt-16 max-w-screen-xl mx-auto flex justify-evenly items-center'>
                <div className='text-start'>
                <NomeDra/>
                <DivVerde/>
                <div>
                <TextoApoio/>
                </div>
                  <div className='mt-5 flex justify-around gap-3'>
                    <div>
                    <Topico text="Há 17 anos atuando no mercado"/>
                    <Topico text="Medicina atualizada e baseada em evidências"/>
                    <Topico text="Diagnóstico e tratamento claro e objetivo"/>
                    </div>
                    <div>
                    <Topico text="Rotineira da emergência do Hospital Mãe de Deus"/>
                    <Topico text="Socorrista do SAMU POA"/>
                    <Topico text="Cursando pós graduação em Nutrologia"/>
                    </div>
                  </div>
                <div>
                <DivVerde/>
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
