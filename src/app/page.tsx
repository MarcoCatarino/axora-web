import { Companies } from "@/components/Home/Companies";
import { Hero } from "@/components/Home/Hero";
import { Solution } from "@/components/Home/Solution";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Solution />
        <Companies />
      </main>
    </>
  );
}
