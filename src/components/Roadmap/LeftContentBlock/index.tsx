import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { RoadmapProps } from "../types";
import { Percent } from "../../../common/Percent";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  Title
} from "./styles";

const LeftContentBlock = ({
  content,
  percent,
  css,
  id,
}: RoadmapProps) => {
  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <ContentWrapper>
              <Percent css={css} percent={percent} />
              <Content>{content}</Content>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
