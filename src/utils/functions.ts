import { Project, ProjectCategory } from "./types";

export const getInitials = (value: string) => {
  const arr = value.split(" ");
  return arr[0][0] + arr[1][0];
};

export const getCount = (
  projects: Project[],
  category: ProjectCategory
): string => {
  return projects
    .reduce((acc, project) => {
      if (project.category === category) {
        return acc + 1;
      } else {
        return acc + 0;
      }
    }, 0)
    .toString();
};

export const groupProjects = (
  projects: Project[]
): Record<ProjectCategory, Project[]> => {
  return projects.reduce(
    (acc, project) =>
      Object.assign(acc, {
        [project.category]: [...acc[project.category], project],
      }),
    {
      "UI/UX": [],
      "Brand Identity Design": [],
      "Logo Design": [],
      "Flyer Designs": [],
    }
  );
};

export const getKeys = (
  obj: Record<ProjectCategory, Project[]>
): ProjectCategory[] => {
  return Object.keys(obj) as ProjectCategory[];
};
