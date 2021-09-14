import { MachineProps } from "../types";
import "./style.css";
import { useCallback, useEffect } from "react";
import {
  WalletMultiButton as ReactUIWalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import RotateSlider from "../../common/RotateSlider";
export const Machine = ({ stage, onEnter, onGallery, onWalletConnect }: MachineProps) => {
  const { publicKey, signMessage, wallet } = useWallet();
  useEffect(()=>{
    if(publicKey!=null)
      onWalletConnect();
  }, [publicKey]);
  console.log(publicKey);
  if(stage==1){
    return (<div className="machine_container">
            <img src="img/machines/welcome_machine.png" className="machine_image" />
            <div className="btn_section">
              <div>
                <img src="img/machines/enter.png" className="scr_btn" onClick={()=>onEnter()}/>
              </div>
              <div style={{marginBottom:"50%"}}>
                <img src="img/machines/trailer.png" className="scr_btn" />
              </div>
              </div>
          </div>);
  } 
  
  else if(stage==2) {
    return (<div className="machine_container">
      <img src="img/machines/wallet_machine.png" className="machine_image" />
      <div className="btn_section">
        <ReactUIWalletMultiButton />
      </div>
      
    </div>);
  }
  else if(stage==3) {
    return (<div className="machine_container">
            <img src="img/machines/mint_machine.png" className="machine_image"/>
            <div className="btn_section">
              <div className="top_btn">
                <img src="img/machines/mint.png" className="scr_btn" />
              </div>
              <div className="bottom_btn">
                <img src="img/machines/gallery.png" className="scr_btn" onClick={onGallery}/>
              </div>
            </div>
          </div>);
  }
  else {
    return (<div className="machine_container">
            <img src="img/machines/mint_machine.png" className="machine_image"/>
            <div className="gallery">
              <i className="fa fa-close close_gallery" style={{float:"right", cursor:"pointer" }} onClick={()=>onWalletConnect()}></i>
              <RotateSlider height="200px" />
            </div>
          </div>);
  }
}