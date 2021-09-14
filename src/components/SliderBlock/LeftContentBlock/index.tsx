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
              9696 algorithmically generated anime styled characters to take part in our animated anime episodes. Metabaes are created using a large pool of 300+ custom designed characteristics with the ability of producing over 15 MILLION different unique combinations. To say that every Metabae will be unique is an understatement. The art is not all you get when purchasing a Metabae. The utility that a Metabae possesses is even cooler than the art itself . . .scroll down to the roadmap and faq to learn more
              </p>
            </LeftWrapper>
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <RotateSlider height="300px" />
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
