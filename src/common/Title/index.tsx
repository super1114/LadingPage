import { TitleStyle } from "./styles";
import { TitleProps } from "../types";
import { Fade } from "react-awesome-reveal";
const Title = ({ id, children }: TitleProps) => (
  <Fade direction="left">
    <div id={id} style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
      <TitleStyle >{children}</TitleStyle>
    </div>
  </Fade>
);

export default Title;
