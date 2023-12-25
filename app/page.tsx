import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'dunidée.app | Transformez votre idée en réalité avec le no-code',
  description: "Créez votre site web, même si vous n'avez jamais codé auparavant."
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
