import { useActiveSection } from "./hooks/useActiveSection";
import Nav     from "./components/Nav";
import Hero    from "./components/Hero";
import Projects from "./components/Projects";
import About   from "./components/About";
import Process from "./components/Process";
import Contact from "./components/Contact";

const SECTION_IDS = ["kode", "manifesto", "kompilasi", "log"];

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <div className="min-h-screen bg-white">
      <Nav activeSection={activeSection} />

      <main className="pt-16">
        <Hero />
        <Projects />
        <About />
        <Process />
        <Contact />
      </main>
    </div>
  );
}
