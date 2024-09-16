import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import Header from "./_components/Header";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Header/>
     <Hero/>
    </div>
  );
}
