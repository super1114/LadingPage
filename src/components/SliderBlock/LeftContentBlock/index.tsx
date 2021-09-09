import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Image } from "../../../common/Image";
import RotateSlider from "../../../common/RotateSlider";
import { SliderBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  LeftWrapper
} from "./styles";

const LeftContentBlock = ({
  id,
}: SliderBlockProps) => {
  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={12} md={12} sm={12} xs={24}>
            <LeftWrapper>
              <Image src="icons/icon1.png" width="50%"  />
              <h5 style={{fontFamily:"myfont", color:"#ee0d5d",fontWeight:"bold", fontSize:"30px" }}>THE METABAES</h5>
              <p style={{textAlign:"center", color:"white", fontSize:"17px"}}>
                9696 algorithmically generated anime styled characters to take part in our animated anime episodes. Metabaes are created using a large pool of 300+ custom designed characteristics with the ability of producing over 15 MILLION different unique combinations. To say that every Metabae will be unique is an understatement. The art is not all you get when purchasing a Metabae. The utility that a Metabae possesses is even cooler than the art itself. Metabaes will have the chance of getting chosen to participate in our animated anime episodes, all holders will have governance over how the storyline of each character continues in the series. Metabaes also grant their holders financial returns in the form of weekly Solana coin airdrops that come directly from secondary market fees. Also don't be too worried about the floor price... we are dedicating a portion of initial sale funds as well as a % of all secondary market fees to a funding pool that will be used to buy back the floor of Metabaes being sold on the marketplace WEEKLY. We have a lot more benefits for holders but I think I've hurt your brain enough already with this huge blurb of text so scroll down if you want to learn more.
              </p>
            </LeftWrapper>
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <RotateSlider />
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
