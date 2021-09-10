import { MachineProps } from "../types";

export const Machine = ({ src, width, height }: MachineProps) => (
  <img src={`/img/machines/${src}`} alt={src} width={width} height={height} />
);
