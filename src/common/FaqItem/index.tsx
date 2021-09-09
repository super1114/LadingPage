import { FaqItemProps } from "../types";
import {useEffect, useState} from 'react'
import "./style.css"
const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isActive, setIsActive] = useState (false);
  const [height, setHeight] = useState("0px");
  const [visible, setVisibility] = useState("hidden");
  useEffect(()=> {
    if(isActive){
      setHeight("40px");
      setVisibility("visible");
    }else {
      setHeight("0px");
      setVisibility("hidden");
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
      <p className="answer" style={{height:height, visibility:visible}}>{answer}</p>
    </div>
  )
};
export default FaqItem;
