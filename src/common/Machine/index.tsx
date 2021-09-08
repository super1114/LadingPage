import { MachineProps } from "../types";

export const Machine = ({ image, width, height }: MachineProps) => (
  <img src={`/img/machines/${image}`} alt={image} width={width} height={height} />
);
