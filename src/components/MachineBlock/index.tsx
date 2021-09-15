import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Machine } from "../../common/Machine";
import { MiddleBlockSection, ContentWrapper } from "./styles";
import { useState, useCallback } from "react";
import { Connection, clusterApiUrl } from '@solana/web3.js';
import * as web3 from '@solana/web3.js';
import * as splToken from '@solana/spl-token';
import {
  getPhantomWallet
} from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { useWallet,useConnection } from '@solana/wallet-adapter-react';
interface MachineBlockProps {
  id: string;
}

const MachineBlock = ({ id }: MachineBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  const [stage, setStage] = useState(1);
  const { connection } = useConnection();
  const { wallet, connect } = useWallet();
  const OnEnter = () => {
    setStage(3);
  }
  const OnWalletConnect = () => {
    setStage(3);
  }
  const OnGallery = () => {
    setStage(4);
  }
  const { connected } = useWallet();
  
  return (
    <MiddleBlockSection>
      <Row justify="center" align="middle" id={id}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <ContentWrapper>
              <Machine stage={stage} onWalletConnect={()=>OnWalletConnect()} onEnter={() => OnEnter()} onGallery={()=>OnGallery()} />
            </ContentWrapper>
          </Col>
      </Row>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MachineBlock);
