import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectGrid from "@/components/ProjectGrid";
import Skills from "@/components/Skills";
import Hackathons from "@/components/Hackathons";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main className="relative isolate">
        <Hero />
        <About />
        <ProjectGrid />
        <Skills />
        <Hackathons />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
