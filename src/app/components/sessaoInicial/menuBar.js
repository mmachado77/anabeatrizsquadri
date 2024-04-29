import Image from "next/image";
import { Menubar } from "primereact/menubar";

export default function menuBar() {

    const items = [
        {
            label: 'Início',
            icon: 'pi pi-home'
        },
    ];
    const start = (
      <Image 
        src="/logo.png" 
        alt="logo" 
        width={50} 
        height={50} 
        className="mr-8" 
      />
    );

    return (
        <div className="">
            <Menubar model={items} start={start} className='border-0' style={{background: 'rgba(255,255,255,0.0)'}} />
      </div>
    );
}
