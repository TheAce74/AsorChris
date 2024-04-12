import styled from "styled-components";
import Section from "../../../components/ui/Section";
import { services } from "../../../data/services";
import Service from "../../../components/ui/Service";
import { minMedia } from "../../../utils/mediaQueries";

export default function Services() {
  return (
    <Section id="services" heading="Services">
      <StyledServices className="grid-flexible">
        {services.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </StyledServices>
    </Section>
  );
}

const StyledServices = styled.div`
  ${minMedia(
    "lg",
    `
  --gap: 3em;
  `
  )}
`;
