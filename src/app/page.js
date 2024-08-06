import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" grid md:grid-cols-2 gap-3 md:gap-6 mb-auto items-cemter lg:mt-16">
    <div className="flex items-start flex-col gap-2 md:gap-4 mb-5 md:mb-0">
    <h1 className="text-4xl md:text-7xl font-medium md:font-semibold leading-relax md:leading-[5.5rem] bg-clip-text text-transparent bg-gradient-to-b from-green-700 to-[#bbb] mb-5">Better design for your digital products</h1>
      <p className="mb-3 font-normal text-2xl">Turning ideas into Reality. We bring together the teams from the global tech industry</p>
      <Button path='/portfolio' text='See Our Works'/>
    </div>
    <div className="imgContainer relative min-h-96">
    <Image src="/hero.png" alt="Image here" fill={true} className=" img "/>
    </div>
    </main>
  );
}
