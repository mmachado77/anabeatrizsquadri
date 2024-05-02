"use client"

import Link from "next/link";
import { Button } from "primereact/button";

export default function BotaoWhatsapp() {

    return (
            <a href="https://wa.me/5551996367799" target="_blank" rel="noopener noreferrer">
                <Button className='' label="Agende sua Consulta" icon="pi pi-whatsapp" severity='success'/>
            </a>

    );
}
