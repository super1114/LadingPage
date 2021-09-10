import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { Machine } from "../../common/Machine";
import { MiddleBlockSection, ContentWrapper } from "./styles";
import { useState } from "react";

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
  const srcList = ["machine1.png","machine1.png","machine1.png","machine1.png","machine1.png"]
  const [src, setSrc] = useState("machine1.png");

  return (
    <MiddleBlockSection>
      <Row justify="center" align="middle" id={id}>
        <ContentWrapper>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Machine src={src} width="100%" height="100%" />
          </Col>
        </ContentWrapper>
      </Row>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MachineBlock);
