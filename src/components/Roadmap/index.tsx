import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import { RoadmapProps } from "./types";

const Roadmap = (props: RoadmapProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  return null;
};

export default Roadmap;
