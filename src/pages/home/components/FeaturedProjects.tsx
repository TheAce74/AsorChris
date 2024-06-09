import { useAtomValue } from "jotai";
import Section from "../../../components/ui/Section";
import SubSection from "../../../components/ui/SubSection";
import { v4 as uuidv4 } from "uuid";
import { projectsAtom } from "../../../services/jotai/projects";
import { getKeys, groupProjects } from "../../../utils/functions";

export default function FeaturedProjects() {
  const projects = useAtomValue(projectsAtom);

  const grouped = groupProjects(projects);
  const projectsKeys = getKeys(grouped);

  return (
    <Section id="featured-projects" heading="Featured Projects">
      {projectsKeys.map((key) => (
        <SubSection
          key={uuidv4()}
          headingText1="Category"
          headingText2={key}
          projects={grouped[key]}
          viewMore={`/projects?filter=${key}`}
        />
      ))}
    </Section>
  );
}
