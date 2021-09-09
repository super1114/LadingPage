import styled from "styled-components";

export const TitleStyle = styled("p")<any>`
  position: relative;
  width: 100%;
  max-width:300px;
  padding 8px;
  font-size: 35px;
  font-weight: 900;
  font-family:myfont;
  letter-spacing: 5px;
  margin-top:50px;
  color: white;
  background-color: #ee0d5d;
  text-align:center !important;
  border-radius: 10px;
  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    padding: 0 18px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 18px;
  }
`;
