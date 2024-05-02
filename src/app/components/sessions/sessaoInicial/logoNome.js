import Image from "next/image";

export default function imagemLosango() {

    return (
        <div>
          <Image 
            src='/logo-nome.png' 
            alt="Logo da Dra. com Nome" 
            width={300}
            height={107}
            priority
            
          />
        </div>
    );
}
