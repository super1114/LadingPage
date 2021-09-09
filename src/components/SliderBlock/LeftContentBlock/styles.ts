import styled from "styled-components";

export const LeftContentSection = styled("section")`
  position: relative;
  padding: 5rem 0 5rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 100%;
  padding:0px 50px;
  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;
export const LeftWrapper = styled("div")`
  position: relative;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  max-width: 100%;
  padding:0px 50px;
  @media only screen and (max-width: 575px) {
    padding:10px 0px;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;
