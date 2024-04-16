import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import Section from "../../../components/ui/Section";

export default function Intro() {
  const [searchParams] = useSearchParams();
  const projectType = searchParams.get("type")?.split("+").join(" ");

  return (
    <Section id="project" heading={projectType + " Project"}>
      <StyledIntro>
        <h3 aria-label="project title">Vtbill UI/UX Case Study</h3>
        <p aria-label="project description">
          In the ever-evolving landscape of digital payments, Vtbill emerges as
          a beacon for streamlined and intuitive bill payment solutions. This
          case study delves into the UI/UX journey of Vtbill—a comprehensive
          platform designed to revolutionize the way users manage their bill
          payments, from purchasing airtime and data to converting airtime to
          cash, and settling electricity bills. Through an in-depth exploration
          of design challenges, innovative solutions, and user-centric
          strategies, we uncover the meticulous process behind crafting a
          seamless experience for Vtbill&apos;s diverse user base. Join us as we
          navigate the intricacies of designing for convenience, efficiency, and
          reliability in the digital age.
        </p>
        <ol aria-label="project details" role="list">
          <li className="flex">
            <strong>Project Name: </strong>
            <p>Vtbill UI/XUX Case Study</p>
          </li>
          <li className="flex">
            <strong>Client: </strong>
            <p>Vtbill</p>
          </li>
          <li className="flex">
            <strong>Duration: </strong>
            <p>3 months</p>
          </li>
          <li className="flex">
            <strong>Website or App link: </strong>
            <p>www.vtbill.com</p>
          </li>
        </ol>
      </StyledIntro>
    </Section>
  );
}

const StyledIntro = styled.div`
  h3 {
    font-size: 1.6rem;
    margin-bottom: 0.7em;
  }

  > p {
    margin-bottom: 2em;
    line-height: 1.8;
  }

  .flex {
    justify-content: start;
    gap: 0.5em;
    margin-bottom: 0.5em;
  }
`;
