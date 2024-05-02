"use client"

import Link from "next/link";
import { Button } from "primereact/button";

export default function BotaoInstagram() {

    return (

            <a href="https://www.instagram.com/anabsquadri" target="_blank" rel="noopener noreferrer">
                <Button className='mt-5 lg:mt-0' label="Me siga no Instagram" icon="pi pi-instagram" severity='warning'/>
            </a>

    );
}
