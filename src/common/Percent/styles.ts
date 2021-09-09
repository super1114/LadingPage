import styled from "styled-components";


export const PercentDiv = styled("div")`
  position: absolute;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align:center;
  line-height:20px;
  font-size:20px;
  font-weight:900;
  border: 2px solid white;
  border-bottom: 2px solid #0a0a0a; 
  background-color:#0a0a0a;
  color: #fa2170;
  @media only screen and (max-width: 575px) {
    left: 40% !important;
    width: 20% !important;
    top:-32px !important;
  }
`;