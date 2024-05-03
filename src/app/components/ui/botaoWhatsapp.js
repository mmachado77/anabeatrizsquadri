"use client"

import Link from "next/link";
import { Button } from "primereact/button";
import { trackGAEvent } from '@/app/utilities/google-analytics';

export default function BotaoWhatsapp() {
    function handleClick(event) {
        trackGAEvent("Clique Botão Whatsapp", "redirect", "Botoes");
      }
    return (
            <a href="https://wa.me/5551996367799" target="_blank" rel="noopener noreferrer">
                <Button className='' label="Agende sua Consulta" icon="pi pi-whatsapp" severity='success' onClick={handleClick}/>
            </a>

    );
}
