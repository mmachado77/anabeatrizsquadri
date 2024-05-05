import Image from "next/image";

export default function FotoConsultorioMobile() {

    return (
        <div className="">
          <Image 
            src='/consultorio.png' 
            alt="Foto Consultorio" 
            width={350} 
            height={278} 
          />
        </div>
    );
}
