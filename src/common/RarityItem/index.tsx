import { useEffect, useState } from "react";
import { RarityItemProps } from "../types";
import "./style.css";
export const RarityItem = ({ number, character, details }: RarityItemProps) => {
  const [height, setHeight] = useState("0px");
  const [isActive, setIsActive] = useState (false);
  useEffect(()=> {
    if(isActive) {
      setHeight("1000px");
    }else {
      setHeight("0px");
    }
  }, [isActive])
  const clickItem = (clicked:boolean) => {
    if(clicked)
      setIsActive(!isActive);
    else
      setIsActive(false);
  }
  return (
    <div className="rarity_item" onClick={() => clickItem(true)} onMouseLeave={()=> clickItem(false)}>
        <div className="number">{number}</div>
        <div className="character">{character}</div>
        <div className="dropdown" style={{maxHeight:height}}>
          <ul className="dropdown_ul">
            {details.map((item, index) => {
              return(<li key={index}>{item}</li>)
            })}
          </ul>
        </div>
    </div>
  ); 
}
