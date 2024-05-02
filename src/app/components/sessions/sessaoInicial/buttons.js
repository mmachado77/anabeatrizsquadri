"use client"

import Link from "next/link";
import { Button } from "primereact/button";

export default function Buttons() {

    return (
        <div className="mt-5 lg:mt-8 lg:mr-2 items-center flex flex-col md:flex-row justify-between">
            <a href="https://wa.me/5551996367799" target="_blank" rel="noopener noreferrer">
                <Button className='' label="Mande uma Mensagem" icon="pi pi-whatsapp" severity='success'/>
            </a>
            <a href="https://www.instagram.com/anabsquadri" target="_blank" rel="noopener noreferrer">
                <Button className='mt-5 lg:mt-0' label="Me siga no Instagram" icon="pi pi-instagram" severity='warning'/>
            </a>
        </div>
    );
}
