import styled from "styled-components";


export const PercentDiv = styled("div")`
  position: absolute;
  color: red;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align:center;
  line-height:20px;
  font-size:20px;
  background: #ffc6bf;
  @media only screen and (max-width: 575px) {
    left: 40% !important;
    width: 20% !important;
    top:-30px !important;
  }
`;