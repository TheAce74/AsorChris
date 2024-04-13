import Section from "../../../components/ui/Section";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { testimonials } from "../../../data/testimonials";
import { v4 as uuidv4 } from "uuid";
import Testimonial from "../../../components/ui/Testimonial";
import styled from "styled-components";
import { maxMedia } from "../../../utils/mediaQueries";

export default function Testimonials() {
  return (
    <StyledTestimonials>
      <Section
        id="testimonials"
        heading="What my clients say about me"
        className="min-h-max"
      >
        <Splide
          aria-label="testimonials"
          options={{
            type: "loop",
            rewind: true,
            rewindByDrag: true,
            gap: "3rem",
            arrows: false,
            pagination: false,
            autoplay: true,
            perPage: 4,
            pauseOnHover: true,
            pauseOnFocus: true,
            reducedMotion: {
              autoplay: false,
            },
            breakpoints: {
              1670: {
                perPage: 3,
              },
              1270: {
                perPage: 2,
              },
              860: {
                perPage: 1,
              },
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SplideSlide key={uuidv4()}>
              <Testimonial {...testimonial} />
            </SplideSlide>
          ))}
        </Splide>
      </Section>
    </StyledTestimonials>
  );
}

const StyledTestimonials = styled.div`
  ${maxMedia(
    "sm",
    `
        margin-top: 1.5em;

        .min-h-max {
            min-height: max-content;
        }
    `
  )}
`;
