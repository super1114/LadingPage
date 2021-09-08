import { TitleStyle } from "./styles";
import { TitleProps } from "../types";
const Title = ({ children }: TitleProps) => (
  <TitleStyle >{children}</TitleStyle>
);

export default Title;
