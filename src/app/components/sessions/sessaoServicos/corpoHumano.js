import Image from "next/image";

export default function FotoConsultorio() {

    return (
        <div className="">
          <Image 
            src='/consultorio.png' 
            alt="Foto Consultorio" 
            width={500} 
            height={398} 
          />
        </div>
    );
}
