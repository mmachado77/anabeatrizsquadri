import Image from "next/image";

export default function imagemLosango() {

    return (
        <div className="">
          <Image 
            src='/welcome-photo.png' 
            alt="Foto Dra. Sorrindo" 
            width={250} 
            height={289} 
          />
        </div>
    );
}
