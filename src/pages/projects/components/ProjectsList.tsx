import styled from "styled-components";
import { Select } from "@mantine/core";
import { maxMedia } from "../../../utils/mediaQueries";
import { allProjects } from "../../../data/allProjects";
import SubSection from "../../../components/ui/SubSection";
import { v4 as uuidv4 } from "uuid";
import { useSearchParams } from "react-router-dom";

const options = [
  { value: "all", label: "All" },
  { value: "brand", label: "Brand Identity Design" },
  { value: "flyer", label: "Flyer Designs" },
  { value: "logo", label: "Logo Design" },
  { value: "ui", label: "UI/UX" },
];

export default function ProjectsList() {
  const [filterParams, setFilterParams] = useSearchParams();
  const computedValue = filterParams.get("filter") ?? "all";

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
            setFilterParams({ filter: option.value })
          }
          checkIconPosition="right"
          aria-label="category dropdown"
        />
      </div>
      {allProjects
        .filter((project) => {
          if (computedValue === "all") {
            return project;
          } else {
            const selectedFilter = options.filter(
              (option) => option.value === computedValue
            )[0];
            return project.type === selectedFilter.label;
          }
        })
        .map(({ type, data }) => (
          <SubSection
            key={uuidv4()}
            headingText1="Projects"
            headingText2={type}
            data={data}
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
