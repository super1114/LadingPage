import { MachineProps } from "../types";
import "./style.css";

const LoadingMachine = 
    <video autoPlay width="100%" height="100%">
      <source src="img/machines/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>;

const WelcomeMachine = 
  <img src="img/machines/machine1.png" width="100%" height="100%" />

const WalletMachine = 
  <img src="img/machines/machine2.png" width="100%" height="100%" />
export const Machine = ({ stage, onVideoLoaded }: MachineProps) => {
  setTimeout(()=>{
    onVideoLoaded();
  },5000);
  if(stage==1) return LoadingMachine;
  else if(stage==2) return WelcomeMachine;
  else return WalletMachine;
}