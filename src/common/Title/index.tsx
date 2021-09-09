import { TitleStyle } from "./styles";
import { TitleProps } from "../types";
import { Fade } from "react-awesome-reveal";
const Title = ({ children }: TitleProps) => (
  <Fade direction="left">
    <TitleStyle >{children}</TitleStyle>
  </Fade>
);

export default Title;
