import Image from "next/image";

export default function ContatoMobile() {

    return (
        <div >
        <div className='text-white text-center items-center flex justify-center'>
            <div className="ml-2">
            <a className='mt-2 text-white no-underline' href="https://maps.app.goo.gl/xTweiRHo2TtsLujT6" target="_blank" rel="noopener noreferrer">
            <label className='block mt-2 font-bold text-l lg:text-xl cursor-pointer'>Rua Costa 30/805, </label>
            <label className='block mt-2 italic text-l lg:text-xl cursor-pointer'>Centro Clínico Mãe de Deus</label>
            <label className='block mt-2 italic text-l lg:text-xl cursor-pointer'>Menino Deus - Porto Alegre</label>
            <label className='italic text-l lg:text-xl cursor-pointer'>51 3230-2754</label>
            </a>
            </div>
        </div>

        <div className='mt-5 text-white items-center flex justify-center'>
            <div>
            <Image 
            src='/whatsapp-white.svg' 
            alt="Ícone Whatsapp" 
            width={25} 
            height={25} 
            
            />
            </div>
            <div className="ml-2">
            <a className='text-white no-underline' href="https://wa.me/5551996367799" target="_blank" rel="noopener noreferrer">
            <label className='lg:block font-bold text-l lg:text-xl cursor-pointer'>51 99636-7799</label>
            </a>
            </div>
        </div>


        <div className='mt-5 mb-4 text-white items-center flex justify-center'>
            <div>
            <Image 
            src='/email-white.svg' 
            alt="Ícone Email" 
            width={25} 
            height={25} 
            
            />
            </div>
            <div className="ml-2">
            <a className='text-white no-underline' href="mailto:contato@anabeatrizsquadri.com.br" target="_blank" rel="noopener noreferrer">
            <label className='lg:block font-bold text-l lg:text-xl cursor-pointer'>contato@anabeatrizsquadri.com.br</label>
            </a>
            </div>
        </div>

          </div>
    );
}
