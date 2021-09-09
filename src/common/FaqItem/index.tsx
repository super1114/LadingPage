import { FaqItemProps } from "../types";
import {useState} from 'react'
import "./style.css"
const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isActive, setIsActive] = useState (false);
  const expand = () => {
    
  }
  return (
    <div className="item">
      <div className="title" onClick={() => setIsActive(!isActive)}>
        <div style={{color:"white", fontSize:"20px"}} className="question">
          {question}
        </div>
        <div style={{color:"white", fontSize:"20px"}}>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <p className="answer">{answer}</p>}
    </div>
  )
};
export default FaqItem;
