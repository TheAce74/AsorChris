import { defaultSizes } from "./constants";

type SizeMediaQuery = {
  type: "min" | "max";
  content: string;
  size: number;
};

type PreferenceMediaQuery = {
  type: "motion" | "dark";
  content: string;
  size?: number;
};

type mediaParams = SizeMediaQuery | PreferenceMediaQuery;

const media = ({ type, content, size }: mediaParams) => {
  switch (type) {
    case "min":
      return `
            @media screen and (min-width: ${size / 16}em){
                ${content}
            }
    `;
    case "max":
      return `
            @media screen and (max-width: ${size / 16}em){
                ${content}
            }
    `;
    case "motion":
      return `
            @media screen and (prefers-reduced-motion: no-preference){
                ${content}
            }
    `;
    case "dark":
      return `
            @media screen and (prefers-color-scheme: dark){
                ${content}
            }
    `;
    default:
      throw new Error("Media type isn't supported");
  }
};

const minMedia = (
  size: "xs" | "sm" | "md" | "lg" | "xl" | number,
  content: string
) => {
  if (typeof size === "number") {
    return media({ type: "min", content, size });
  } else {
    return media({ type: "min", content, size: defaultSizes[size] });
  }
};

const maxMedia = (
  size: "xs" | "sm" | "md" | "lg" | "xl" | number,
  content: string
) => {
  if (typeof size === "number") {
    return media({ type: "max", content, size });
  } else {
    return media({ type: "max", content, size: defaultSizes[size] });
  }
};

const motionMedia = (content: string) => {
  return media({ type: "motion", content });
};

const darkMedia = (content: string) => {
  return media({ type: "dark", content });
};

export { minMedia, maxMedia, motionMedia, darkMedia };
