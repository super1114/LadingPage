import { FaqItemProps } from "../types";
import {useEffect, useState} from 'react'
import "./style.css"
export const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isActive, setIsActive] = useState (false);
  const [height, setHeight] = useState("0px");
  const [font, setFontSize] = useState("0px");
  const [transition, setTransition] = useState("max-height 0.15s ease-out");
  useEffect(()=> {
    if(isActive){
      setHeight("500px");
      setTransition("max-height 0.25s ease-in");
      
    }else {
      setHeight("0px");
      setTransition("max-height 0.15s ease-out");
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
      <p className="answer" style={{ maxHeight:height }}>{answer}</p>
    </div>
  )
};
export const LastFaqItem = () => {
  const [isActive, setIsActive] = useState (false);
  const [height, setHeight] = useState("0px");
  const [font, setFontSize] = useState("0px");
  const [transition, setTransition] = useState("max-height 0.15s ease-out");
  useEffect(()=> {
    if(isActive){
      setHeight("500px");
      setTransition("max-height 0.25s ease-in");
      
    }else {
      setHeight("0px");
      setTransition("max-height 0.15s ease-out");
    }
  },[isActive])
  return (
    <div className="item">
      <div className="title" onClick={() =>{ setIsActive(!isActive); }}>
        <div className="question">
          HOW CAN I CONTACT &nbsp;YOU?
        </div>
        <div className="question_icon">{isActive ? '-' : '+'}</div>
      </div>
      <p className="answer" style={{ maxHeight:height }}>If you have any questions or concerns you can get in contact with us by joining our discord server and opening a support ticket.</p>
    </div>
  )
};
