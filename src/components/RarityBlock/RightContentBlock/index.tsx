import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { RarityItem } from "../../../common/RarityItem";
import { RarityProps, RarityItemProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
  RaritySection
} from "./styles";

const RightBlock = ({
  content,
  id,
}: RarityProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <RightBlockContainer>
      <Fade direction="right">
        <RaritySection>
          <Row justify="space-between" align="middle" id={id}>
            <Col lg={11} md={11} sm={11} xs={24}>
              <ContentWrapper>
                <img src="img/rarity/1.jpg" width="50%" height="100%" />
                <img src="img/rarity/2.jpg" width="50%" height="100%" />  
              </ContentWrapper>
            </Col>
            <Col lg={11} md={11} sm={12} xs={24}>
              <ContentWrapper>
                <h5 style={{marginTop:"30px", color: "#fe457e", fontWeight:900}}>Rarity</h5>
                {content.map((item:RarityItemProps, index:any)=> {
                  return (
                    <RarityItem key={index} number={item.number} character={item.character} />
                  )
                })}
              </ContentWrapper>
            </Col>
          </Row>
        </RaritySection>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
