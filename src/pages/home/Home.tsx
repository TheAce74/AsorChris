import About from "./components/About";
import Creativity from "./components/Creativity";
import FeaturedProjects from "./components/FeaturedProjects";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Creativity />
      <Services />
      <FeaturedProjects />
    </main>
  );
}
