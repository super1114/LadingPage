import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 2.5rem 4rem 3rem;
  text-align: center;
  
  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  padding: 20px;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
export const NameContent = styled("h6")`
  text-align:center;
  padding-top: 10px;
  font-style:italic;
  margin: 0px;
  font-size:26px;
  text-transform: uppercase;
  color: #ee0d5d;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const DescContent = styled("p")`
  text-align:center;
  padding-top: 0px;
  font-style:italic;
  font-size:20px;
  text-transform: uppercase;
  color: white;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
