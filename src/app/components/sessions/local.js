"use client"

import React, { useState, useEffect } from 'react'; 
import TextoLocal from './sessaoLocal/textoLocal';
import Topico from './sessaoLocal/topicoCentroClinico';
import Contato from './sessaoLocal/contato';
import ContatoMobile from './sessaoLocal/contatoMobile';
import LogoBranco from './sessaoLocal/logoLocal';
import LogoBrancoMobile from './sessaoLocal/logoLocalMobile';
import DivBranca from './sessaoServicos/linhaBranca';

export default function Local(...props) {
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
    <div style={{ position: 'relative' }}>
      {/* Fundo com cor de fundo e imagem */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#09859C', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: "url('centroclinico.png')", backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 2 }} />
      {/* Conteúdo da sessão */}
      <div style={{ position: 'relative', zIndex: 3 }}>
        {isMobile ? (
          <div>
          <div className='p-5 lg:p-20'>
            <div className='flex justify-center'>
            <LogoBrancoMobile/>
            </div>

            <div className='mt-5'>
              <Topico text='Marcação de Consultas para o mesmo dia'/>
              <Topico text='Atendimento às terças e quintas à tarde'/>
              <Topico text='Local de segurança e conforto'/>
              <Topico text='Estacionamento em frente ao local'/>
              <Topico text='Consultas particulares com valores acessíveis'/>
            </div>
            <div className='mt-5'>
              <DivBranca/>
            </div>

              <div className='mt-5'>
              <ContatoMobile/>
              </div>

          </div>
        </div>
        ) : (
          <div>
            <div className='lg:p-20'>
              <div className='flex justify-center'>
              <LogoBranco/>
              </div>
              
            <div className='mt-16 flex items-center justify-around gap-5'>
                <div className='max-w-[50%]'>
                <Contato/>
                </div>
              <div>
                <Topico text='Marcação de Consultas para o mesmo dia'/>
                <Topico text='Atendimento às terças e quintas à tarde'/>
                <Topico text='Local de segurança e conforto'/>
                <Topico text='Estacionamento em frente ao local'/>
                <Topico text='Consultas particulares com valores acessíveis'/>
              </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
}
