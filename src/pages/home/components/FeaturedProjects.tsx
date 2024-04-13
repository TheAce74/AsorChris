import Section from "../../../components/ui/Section";
import { featuredProjects } from "../../../data/featuredProjects";
import SubSection from "../../../components/ui/SubSection";
import { v4 as uuidv4 } from "uuid";

export default function FeaturedProjects() {
  return (
    <Section id="featured-projects" heading="Featured Projects">
      {featuredProjects.map(({ type, data, viewMore }) => (
        <SubSection
          key={uuidv4()}
          headingText1="Category"
          headingText2={type}
          data={data}
          viewMore={viewMore}
        />
      ))}
    </Section>
  );
}
