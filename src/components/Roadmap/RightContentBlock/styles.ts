import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  position: relative;
  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  text-align:center;
  background-color: #ffc6bf;
  color: #ff7fae;
  padding: 30px 40px;
  margin:0px;
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
