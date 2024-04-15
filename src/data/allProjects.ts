import { ProjectWithContentType } from "../utils/types";
import image1 from "../assets/featuredProjectsImage1.png";
import image2 from "../assets/featuredProjectsImage2.png";
import { v4 as uuidv4 } from "uuid";

type Project = {
  type: string;
  data: string[] | ProjectWithContentType[];
}[];

export const allProjects: Project = [
  {
    type: "UI/UX",
    data: [
      {
        image: image1,
        title: "Vtbill UI/UX Case Study",
        text: "Preview the wonderful UI/UX Case study that was inspired by vtbill. A bill payment platform that is looking to revolutionalise bill payment in not just Nigeria but across Africa and with time, the entire globe.",
        linkText: "View project",
        linkPath: `/projects/${uuidv4()}?type=UI/UX`,
      },
      {
        image: image1,
        title: "Vtbill UI/UX Case Study",
        text: "Preview the wonderful UI/UX Case study that was inspired by vtbill. A bill payment platform that is looking to revolutionalise bill payment in not just Nigeria but across Africa and with time, the entire globe.",
        linkText: "View project",
        linkPath: `/projects/${uuidv4()}?type=UI/UX`,
      },
      {
        image: image1,
        title: "Vtbill UI/UX Case Study",
        text: "Preview the wonderful UI/UX Case study that was inspired by vtbill. A bill payment platform that is looking to revolutionalise bill payment in not just Nigeria but across Africa and with time, the entire globe.",
        linkText: "View project",
        linkPath: `/projects/${uuidv4()}?type=UI/UX`,
      },
      {
        image: image1,
        title: "Vtbill UI/UX Case Study",
        text: "Preview the wonderful UI/UX Case study that was inspired by vtbill. A bill payment platform that is looking to revolutionalise bill payment in not just Nigeria but across Africa and with time, the entire globe.",
        linkText: "View project",
        linkPath: `/projects/${uuidv4()}?type=UI/UX`,
      },
      {
        image: image1,
        title: "Vtbill UI/UX Case Study",
        text: "Preview the wonderful UI/UX Case study that was inspired by vtbill. A bill payment platform that is looking to revolutionalise bill payment in not just Nigeria but across Africa and with time, the entire globe.",
        linkText: "View project",
        linkPath: `/projects/${uuidv4()}?type=UI/UX`,
      },
      {
        image: image1,
        title: "Vtbill UI/UX Case Study",
        text: "Preview the wonderful UI/UX Case study that was inspired by vtbill. A bill payment platform that is looking to revolutionalise bill payment in not just Nigeria but across Africa and with time, the entire globe.",
        linkText: "View project",
        linkPath: `/projects/${uuidv4()}?type=UI/UX`,
      },
      {
        image: image1,
        title: "Vtbill UI/UX Case Study",
        text: "Preview the wonderful UI/UX Case study that was inspired by vtbill. A bill payment platform that is looking to revolutionalise bill payment in not just Nigeria but across Africa and with time, the entire globe.",
        linkText: "View project",
        linkPath: `/projects/${uuidv4()}?type=UI/UX`,
      },
      {
        image: image1,
        title: "Vtbill UI/UX Case Study",
        text: "Preview the wonderful UI/UX Case study that was inspired by vtbill. A bill payment platform that is looking to revolutionalise bill payment in not just Nigeria but across Africa and with time, the entire globe.",
        linkText: "View project",
        linkPath: `/projects/${uuidv4()}?type=UI/UX`,
      },
    ],
  },
  {
    type: "Brand Identity Design",
    data: [
      {
        image: image1,
        title: "Vtbill Branding",
        text: "Preview the wonderful UI/UX Case study that was inspired by vtbill. A bill payment platform that is looking to revolutionalise bill payment in not just Nigeria but across Africa and with time, the entire globe.",
        linkText: "View project",
        linkPath: `/projects/${uuidv4()}?type=Brand+Identity`,
      },
      {
        image: image1,
        title: "Vtbill Branding",
        text: "Preview the wonderful UI/UX Case study that was inspired by vtbill. A bill payment platform that is looking to revolutionalise bill payment in not just Nigeria but across Africa and with time, the entire globe.",
        linkText: "View project",
        linkPath: `/projects/${uuidv4()}?type=Brand+Identity`,
      },
      {
        image: image1,
        title: "Vtbill Branding",
        text: "Preview the wonderful UI/UX Case study that was inspired by vtbill. A bill payment platform that is looking to revolutionalise bill payment in not just Nigeria but across Africa and with time, the entire globe.",
        linkText: "View project",
        linkPath: `/projects/${uuidv4()}?type=Brand+Identity`,
      },
      {
        image: image1,
        title: "Vtbill Branding",
        text: "Preview the wonderful UI/UX Case study that was inspired by vtbill. A bill payment platform that is looking to revolutionalise bill payment in not just Nigeria but across Africa and with time, the entire globe.",
        linkText: "View project",
        linkPath: `/projects/${uuidv4()}?type=Brand+Identity`,
      },
      {
        image: image1,
        title: "Vtbill Branding",
        text: "Preview the wonderful UI/UX Case study that was inspired by vtbill. A bill payment platform that is looking to revolutionalise bill payment in not just Nigeria but across Africa and with time, the entire globe.",
        linkText: "View project",
        linkPath: `/projects/${uuidv4()}?type=Brand+Identity`,
      },
      {
        image: image1,
        title: "Vtbill Branding",
        text: "Preview the wonderful UI/UX Case study that was inspired by vtbill. A bill payment platform that is looking to revolutionalise bill payment in not just Nigeria but across Africa and with time, the entire globe.",
        linkText: "View project",
        linkPath: `/projects/${uuidv4()}?type=Brand+Identity`,
      },
      {
        image: image1,
        title: "Vtbill Branding",
        text: "Preview the wonderful UI/UX Case study that was inspired by vtbill. A bill payment platform that is looking to revolutionalise bill payment in not just Nigeria but across Africa and with time, the entire globe.",
        linkText: "View project",
        linkPath: `/projects/${uuidv4()}?type=Brand+Identity`,
      },
      {
        image: image1,
        title: "Vtbill Branding",
        text: "Preview the wonderful UI/UX Case study that was inspired by vtbill. A bill payment platform that is looking to revolutionalise bill payment in not just Nigeria but across Africa and with time, the entire globe.",
        linkText: "View project",
        linkPath: `/projects/${uuidv4()}?type=Brand+Identity`,
      },
    ],
  },
  {
    type: "Logo Design",
    data: [
      image2,
      image2,
      image2,
      image2,
      image2,
      image2,
      image2,
      image2,
      image2,
      image2,
    ],
  },
  {
    type: "Flyer Designs",
    data: [
      image2,
      image2,
      image2,
      image2,
      image2,
      image2,
      image2,
      image2,
      image2,
      image2,
    ],
  },
];
