"use client"

import Link from "next/link";
import { Button } from "primereact/button";
import BotaoWhatsapp from "../../ui/botaoWhatsapp";
import BotaoInstagram from "../../ui/botaoInstagram";

export default function DicasTitulo() {

    return (
        <div className="">
            <label className='italic font-bold text-black/75 block text-4xl'>Explore Dicas de Saúde, Alimentação e Bem-Estar no meu Instagram! </label>
          {/* <label className=' font-bold text-5xl'>Instagram</label> */}
        </div>
    );
}
