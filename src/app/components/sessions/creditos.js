"use client"

import React, { useState, useEffect } from 'react'; 


export default function Creditos(...props) {
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
    <div className='bg-[#076778]'>
        {isMobile ? (
          <div className='text-end bg-[#076778] max-w-screen-xl mx-auto p-5'>
          <label className='block text-white text-[13px]'>Desenvolvido com orgulho por Matheus Machado</label>
          <a className='no-underline' href="https://wa.me/5551995617505" target="_blank" rel="noopener noreferrer">
          <label className='text-white italic text-[13px] cursor-pointer'>Contato: 51 99561-7505</label>
          </a>
        </div>
        ) : (
          <div className='text-end bg-[#076778] max-w-screen-xl mx-auto p-5'>
            <label className='block text-white text-[13px]'>Desenvolvido com orgulho por Matheus Machado</label>
            <a className='no-underline' href="https://wa.me/5551995617505" target="_blank" rel="noopener noreferrer">
            <label className='text-white italic text-[13px] cursor-pointer'> Contato: 51 99561-7505</label>
            </a>
          </div>
        )}
      </div>
  );
  
}
