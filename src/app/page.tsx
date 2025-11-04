import { Commitment } from "@/components/Home/Commitment";
import { Companies } from "@/components/Home/Companies";
import { Hero } from "@/components/Home/Hero";
import { Process } from "@/components/Home/Process";
import { Projects } from "@/components/Home/Projects";
import { Solution } from "@/components/Home/Solution";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Solution />
        <Companies />
        <Commitment />
        <Process />
        <Projects />
      </main>
    </>
  );
}
