import React from 'react';
import Link from 'next/link';
import { Menubar } from 'primereact/menubar';
import './globals.css';
import Botoes from './components/buttons';
import Image from 'next/image'; // Importando o componente Image do Next.js

export default function Home() {
  const items = [
    {
      label: 'Início',
      icon: 'pi pi-home',
    },
  ];

  const start = (
    <Image src="/logo.png" alt="logo" width={50} height={50} className="mr-8" />
  );

  return (
    <div className="pt-5 px-5 sm:px-10 md:px-20 lg:px-24 pb-10" style={{ background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(230,242,189,1) 100%)' }}>
      <div className="card">
        <Menubar model={items} start={start} className="border-0" style={{ background: 'rgba(255,255,255,0.0)' }} />
      </div>
      <div className="-mt-14 flex justify-between items-center: mt-0 flex-col justify-center sm:">
        <div className="text-center sm:text-start mb-10 sm:mb-0">
          <div>
            <label className="text-black/75 block text-4xl">Meu nome é </label>
            <label className="font-bold text-5xl">ANA BEATRIZ SQUADRI</label>
          </div>
          <div className="my-5 border border-solid rounded border-verdinho-logo"></div>
          <div className="text-black/75">
            <label className="italic text-2xl">E quero oferecer toda a minha </label>
            <label className="font-bold italic text-2xl">atenção e disponibilidade </label>
            <label className="italic text-2xl">a você.</label>
          </div>
          <Botoes />
        </div>
        <div className="max-w-full sm:max-w-none">
          <Image
            src="/welcome-photo.png"
            alt="Foto Dra. Sorrindo"
            width={400}
            height={462}
            srcSet={{
              '/welcome-photo.png 400w': 400,
              '/welcome-photo@2x.png 800w': 800,
              '/welcome-photo@3x.png 1200w': 1200,
            }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
