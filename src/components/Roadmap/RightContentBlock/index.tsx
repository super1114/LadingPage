import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { RoadmapProps } from "../types";
import { Fade } from "react-awesome-reveal";
import { Percent } from "../../../common/Percent";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
} from "./styles";

const RightBlock = ({
  content,
  percent,
  css,
  id,
}: RoadmapProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <ContentWrapper>
              <Percent css={css} percent={percent} />
              <Content>{content}</Content>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
