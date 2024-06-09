import styled from "styled-components";
import { Select } from "@mantine/core";
import { maxMedia } from "../../../utils/mediaQueries";
import SubSection from "../../../components/ui/SubSection";
import { v4 as uuidv4 } from "uuid";
import { useSearchParams } from "react-router-dom";
import { useAtomValue } from "jotai";
import { projectsAtom } from "../../../services/jotai/projects";
import { getKeys, groupProjects } from "../../../utils/functions";
import { ProjectCategory } from "../../../utils/types";

const options = [
  { value: "all", label: "All" },
  { value: "Brand Identity Design", label: "Brand Identity Design" },
  { value: "Flyer Designs", label: "Flyer Designs" },
  { value: "Logo Design", label: "Logo Design" },
  { value: "UI/UX", label: "UI/UX" },
];

export default function ProjectsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const computedValue: "all" | ProjectCategory =
    (searchParams.get("filter") as ProjectCategory | null) ?? "all";

  const projects = useAtomValue(projectsAtom);

  const grouped = groupProjects(projects);
  const projectsKeys = getKeys(grouped);

  return (
    <StyledProjectsList>
      <div className="flex filter">
        <h2>Filter by category</h2>
        <Select
          placeholder="Pick category"
          data={options}
          size="md"
          value={computedValue}
          onChange={(_value, option) =>
            setSearchParams({ filter: option.value })
          }
          checkIconPosition="right"
          aria-label="category dropdown"
        />
      </div>
      {projectsKeys
        .filter((key) => {
          if (computedValue === "all") {
            return grouped[key];
          } else {
            const selectedFilter = options.filter(
              (option) => option.value === computedValue
            )[0];
            return key === selectedFilter.label;
          }
        })
        .map((key) => (
          <SubSection
            key={uuidv4()}
            headingText1="Projects"
            headingText2={key}
            projects={grouped[key]}
          />
        ))}
    </StyledProjectsList>
  );
}

const StyledProjectsList = styled.section`
  padding: 4em;
  min-height: 50dvh;

  .filter {
    justify-content: start;
    gap: 3em;
    margin-bottom: 2em;
  }

  h2 {
    font-size: 1.4rem;
  }

  ${maxMedia(
    "sm",
    `
    padding: 2em 1em;

    .filter {
        gap: 2em;
    }

    h2 {
        font-size: 1.2rem;
    }
  `
  )}
`;
