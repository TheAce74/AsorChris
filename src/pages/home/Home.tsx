import About from "./components/About";
import Contact from "./components/Contact";
import Creativity from "./components/Creativity";
import FeaturedProjects from "./components/FeaturedProjects";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Creativity />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <Contact />
    </main>
  );
}
