import { Blog } from "@/components/Home/Blog";
import { Commitment } from "@/components/Home/Commitment";
import { Companies } from "@/components/Home/Companies";
import { Hero } from "@/components/Home/Hero";
import { Pricing } from "@/components/Home/Pricing";
import { Process } from "@/components/Home/Process";
import { Projects } from "@/components/Home/Projects";
import { Solution } from "@/components/Home/Solution";
import { Testimonials } from "@/components/Home/Testimonials";

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
        <Testimonials />
        <Pricing />
        <Blog />
      </main>
    </>
  );
}
