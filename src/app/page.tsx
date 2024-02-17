import About from "@/components/About";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-5 flex flex-col gap-10 md:gap-12 relative">
      <Header />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
