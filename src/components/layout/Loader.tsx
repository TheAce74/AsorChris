import HashLoader from "react-spinners/HashLoader";
import styled from "styled-components";

export default function Loader() {
  return (
    <StyledLoader>
      <HashLoader color="#006fd6" size={100} />
    </StyledLoader>
  );
}

const StyledLoader = styled.div`
  background-color: var(--clr-neutral-100);
  position: fixed;
  inset: 0;
  width: 100dvw;
  height: 100dvh;
  z-index: 9999;
  display: grid;
  place-content: center;
  place-items: center;
`;
