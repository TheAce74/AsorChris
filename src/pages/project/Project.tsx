import { useParams, useSearchParams } from "react-router-dom";
import Interface from "./components/Interface";
import Intro from "./components/Intro";
import { useAtomValue } from "jotai";
import { projectsAtom } from "../../services/jotai/projects";

export default function Project() {
  const { name } = useParams();
  const projects = useAtomValue(projectsAtom);
  const project = projects.filter((project) => project.name === name)[0];
  const [searchParams] = useSearchParams();
  const projectType =
    searchParams.get("type")?.split("+").join(" ") ?? project.category;

  return (
    <main>
      <Intro project={project} projectType={projectType} />
      <Interface project={project} />
    </main>
  );
}
