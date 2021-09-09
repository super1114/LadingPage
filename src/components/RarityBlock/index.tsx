import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import { RarityProps } from "./types";

const RarityBlock = (props: RarityProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  return null;
};

export default RarityBlock;
