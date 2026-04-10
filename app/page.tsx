import Image from "next/image";
import Link from "next/link";
import GridDistortion from '@/components/GridDistortion';

export default function Home() {
  return (

    <main className="relative w-full h-screen min-h-0 overflow-hidden">

    
      <div className="relative w-full h-full">

        <GridDistortion
          imageSrc="/point.JPG"
          grid={20}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          offsetY={0.5}
          className="absolute inset-0"
        />
      </div>


    </main>
  );
}
