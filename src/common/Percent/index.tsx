import { PercentProps } from "../types";
import { PercentDiv } from "./styles";
export const Percent = ({ css, percent }: PercentProps) => (
  <PercentDiv style={css}>{percent}</PercentDiv>
);
