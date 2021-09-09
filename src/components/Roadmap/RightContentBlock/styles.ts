import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  position: relative;
  padding: 8px 40px;
  @media only screen and (max-width: 1024px) {
    padding: 8px 20px;
    margin-top:30px;
  }
  @media only screen and (max-width: 768px) {
    padding: 8px 20px;
    margin-top:30px;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  text-align:center;
  padding: 30px 40px;
  margin:0px;
  background-color:#0a0a0a;
  border: 2px white solid;
  color: white;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  width:100%;
  padding:30px 0px;
  @media only screen and (max-width: 575px) {
    padding-top: 0rem;
    padding-bottom:0px
  }
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
