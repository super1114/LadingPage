import { FaqItemProps } from "../types";
import {useEffect, useState} from 'react'
import "./style.css"
const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isActive, setIsActive] = useState (false);
  const [height, setHeight] = useState("0px");
  const [font, setFontSize] = useState("0px");
  useEffect(()=> {
    if(isActive){
      setHeight("40px");
      setTimeout(()=> {
        setFontSize("17px");
      },100);
      
    }else {
      setHeight("0px");
      setFontSize("0px");
    }
  },[isActive])
  return (
    <div className="item">
      <div className="title" onClick={() =>{ setIsActive(!isActive); }}>
        <div className="question">
          {question}
        </div>
        <div className="question_icon">{isActive ? '-' : '+'}</div>
      </div>
      <p className="answer" style={{ fontSize:font, height:height }}>{answer}</p>
    </div>
  )
};
export default FaqItem;
