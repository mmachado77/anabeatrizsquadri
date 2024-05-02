"use client"

import React, { useState, useEffect } from 'react'; 
import { InstagramEmbed, } from 'react-social-media-embed';

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
            <div>
            <InstagramEmbed url="https://www.instagram.com/reel/C6BXL0POIMs/" width={328} captioned />
            </div>
          ) : (

            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed url="https://www.instagram.com/reel/C6BXL0POIMs/" width={328} />
          </div>
          )}
        </div>
    
        
      );
}
