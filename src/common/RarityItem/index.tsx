import { RarityItemProps } from "../types";
export const RarityItem = ({ number, character }: RarityItemProps) => (
  <div style={{borderBottom:"1px solid #999", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
      <div style={{fontSize:"30px", fontWeight:900}}>{number}</div>
      <div style={{color:"#46bcfc", fontSize:"20px", fontWeight:900}}>{character}</div>
  </div>
);
