"use client"

import Link from "next/link";
import { Button } from "primereact/button";
import BotaoWhatsapp from "../../ui/botaoWhatsapp";
import BotaoInstagram from "../../ui/botaoInstagram";

export default function Buttons() {

    return (
        <div className="mt-5 lg:mt-8 lg:mr-2 items-center flex flex-col md:flex-row justify-between">
            <BotaoWhatsapp/>
            <BotaoInstagram/>
        </div>
    );
}
