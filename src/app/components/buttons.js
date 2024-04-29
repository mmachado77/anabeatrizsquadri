"use client"

import Link from "next/link";
import { Button } from "primereact/button";

export default function Buttons() {

    return (
        <div className="mt-0 lg:mt-5 mr-0 lg:mr-5 flex justify-between">
        <a href="https://wa.me/5551996367799" target="_blank" rel="noopener noreferrer">
            <Button className='' label="Mande uma Mensagem" icon="pi pi-whatsapp" severity='success'/>
        </a>
        <label className='text-black font-bold text-4xl'>51 99636-7799</label>
        </div>
    );
}
