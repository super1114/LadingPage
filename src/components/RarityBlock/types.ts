export interface RarityItemProps {
  number: string;
  character: string;
}
export interface RarityProps {
  content: Array<RarityItemProps>;
  id: string;
  type?: string;
}
