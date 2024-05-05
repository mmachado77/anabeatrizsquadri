"use client"

import Topico from '../ui/topicoMaior';
import Coracao from './sessaoServicos/corpoHumano';
import IntroducaoServicos from './sessaoServicos/textoApoio';
import Pacientes18 from './sessaoServicos/pacientes18';
import BotaoWhatsapp from '../ui/botaoWhatsapp';
import React, { useState, useEffect } from 'react'; 
import DivVerde from './sessaoInicial/linhaVerde';
import FotoConsultorioMobile from './sessaoServicos/fotoConsultorioMobile';

export default function Servicos(...props) {
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
             <div className='mt-5 justify-center items-center gap-6'>
              <DivVerde/>
              <div className=''>
              <IntroducaoServicos/>
              <div className='mx-8'>
              <Topico text="Entrevista detalhada"/>
                    <Topico text="Avaliação de sintomas e funcionamento dos órgãos"/>
                    <Topico text="Checkup em adultos e terceira idade"/>
                    <Topico text="Diagnóstico objetivo e descomplicado"/>
                    <Topico text="Soluções para qualidade de vida"/>
                    <Topico text="Atestado para trabalho e viagens"/>
                    <Pacientes18/>
              </div>
              </div>
            <div className='mt-7 flex justify-center'>
            
            <FotoConsultorioMobile/>
            </div>
            <div className='flex justify-center'>
            <label className='text-black/75'>Consultório Dra. Ana Beatriz Squadri</label>
            </div>
            <div className='mt-3 flex justify-center'>
            <BotaoWhatsapp/>
            </div>
            <DivVerde/>
            </div>

          ) : (
             <div className='max-w-screen-xl h-[100dvh] mx-auto px-8 items-center gap-6'>
              <div className=''>
              <IntroducaoServicos/>
              </div>
            <div className='mt-7 flex justify-between'>
              <div className=''>
            <Coracao/>
            <label className='text-black/75'>Consultório Dra. Ana Beatriz Squadri</label>
            </div>
            <div className=''>
              <div className='mt-5 flex gap-'>
                    <div className='content-start'>
                    <Topico text="Entrevista detalhada"/>
                    <Topico text="Avaliação de sintomas e funcionamento dos órgãos"/>
                    <Topico text="Checkup em adultos e terceira idade"/>
                    <Topico text="Diagnóstico objetivo e descomplicado"/>
                    <Topico text="Soluções para qualidade de vida"/>
                    <Topico text="Atestado para trabalho e viagens"/>
                    <Pacientes18/>
                    </div>
                  </div>
                  <div className='mt-5'>
                  <BotaoWhatsapp/>
                  </div>
              
            </div>
            </div>
            
            </div>
          )}
        </div>
    
        
      );
}
