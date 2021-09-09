import styled from "styled-components";

export const LeftContentSection = styled("section")`
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
  background-color:#140f0c;
  border: 2px white solid;
  color: white;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  width:100%;
  padding:30px 0px;
  @media only screen and (max-width: 575px) {
    padding-top: 0rem;
    padding-bottom: 0px
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

export const Title = styled("h6")`
  font-size: 40px;
  text-align:center;
  margin-bottom:0px;
  color: #ff7fae;
`;
