import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  z-index:10;
  position: relative;
  padding: 3.5rem 3rem 3rem;
  width:100%;
  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  padding: 0px 20px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
export const RaritySection = styled("div")`
  
`;
