export interface RarityItemProps {
  number: string;
  character: string;
}
export interface RarityProps {
  column1: Array<RarityItemProps>;
  column2: Array<RarityItemProps>;
  column3: Array<RarityItemProps>;
  id: string;
  type?: string;
}
