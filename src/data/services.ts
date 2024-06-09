import { ServiceType } from "../utils/types";
import services1 from "../assets/services1.svg";
import services2 from "../assets/services2.svg";
import services3 from "../assets/services3.svg";
import services4 from "../assets/services4.svg";

export const services: ServiceType[] = [
  {
    id: "services-ui",
    image: services1,
    title: "UI/UX Design",
    text: "Immerse in the seamless blend of aesthetics and usability with my UI/UX design services. I focus on creating intuitive interfaces and engaging user experiences, ensuring your digital products are not just visually appealing but also user-friendly and accessible. Let me make your users' journey unforgettable",
    linkText: "See UI/UX Designs",
    linkPath: "/projects?filter=UI/UX",
  },
  {
    id: "services-flyer",
    image: services2,
    title: "Flyer Design",
    text: "Capture attention at first glance with my custom flyer design services. From event announcements to promotional flyers, I craft eye-catching designs that communicate your message effectively and resonate with your target audience. Elevate your marketing with flyers that stand out.",
    linkText: "See Flyer Designs",
    linkPath: "/projects?filter=Flyer Designs",
  },
  {
    id: "services-logo",
    image: services3,
    title: "Logo Design",
    text: "Your brand's first impression starts with a logo. My logo design service is dedicated to creating distinctive, memorable logos that encapsulate the essence of your brand. A great logo is the cornerstone of your brand identity. Let me build yours to be as impactful as possible.",
    linkText: "See Logo Designs",
    linkPath: "/projects?filter=Logo Design",
  },
  {
    id: "services-brand",
    image: services4,
    title: "Brand Identity Design",
    text: "Build a cohesive, powerful brand identity with my comprehensive design services. From logos to color schemes and typography, I create a visual language that communicates your brand's values and vision. Elevate your presence and connect with your audience on a deeper level.",
    linkText: "See Brand Identity Designs",
    linkPath: "/projects?filter=Brand Identity Design",
  },
  {
    id: "services-content",
    image: services4,
    title: "Content Writing",
    text: "Engage and convert your audience with compelling content. Our content writing services specialize in crafting clear, persuasive, and SEO-friendly content that speaks directly to your audience's needs and interests. From website copy to blog posts, let's tell your story in a way that resonates and drives action.",
    linkText: "See Contents",
    linkPath: "/projects?filter=all",
  },
];
