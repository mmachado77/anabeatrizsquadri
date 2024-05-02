import Image from "next/image";

export default function imagemLosango() {

    return (

          <Image 
            src='/welcome-photo.png' 
            alt="Foto Dra. Sorrindo" 
            width={400} 
            height={462} 
            priority
          />

    );
}
