import styled from "styled-components";

export const TitleStyle = styled("p")<any>`
  position: relative;
  width: 100%;
  font-size: 35px;
  font-weight: bold;
  padding: 0 60px;
  color: #ff7fae !important;
  text-align:center !important;
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};

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
