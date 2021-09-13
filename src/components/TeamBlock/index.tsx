import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Image } from "../../common/Image";
import { MiddleBlockSection, Content, ContentWrapper, NameContent, DescContent } from "./styles";

const TeamBlock = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
        <Row justify="center" align="top">
            <Col lg={6} md={12} sm={24} xs={24}>
              <ContentWrapper>
                <Image src="team/1.png" width="80%" />
                <NameContent>Mukhie</NameContent>
                <DescContent>Project Management</DescContent>
              </ContentWrapper>
            </Col>
            <Col lg={6} md={12} sm={24} xs={24}>
              <ContentWrapper>
                <Image src="team/2.png" width="80%" />
                <NameContent>Jet</NameContent>
                <DescContent>Community manager and marketer</DescContent>
              </ContentWrapper>
            </Col>
            <Col lg={6} md={12} sm={24} xs={24}>
              <ContentWrapper>
                <Image src="team/3.png" width="80%" />
                <NameContent>Arya</NameContent>
                <DescContent>Artist and designer</DescContent>
              </ContentWrapper>
            </Col>
            <Col lg={6} md={12} sm={24} xs={24}>
              <ContentWrapper>
                <Image src="team/4.png" width="80%" />
                <NameContent>Rosta</NameContent>
                <DescContent>Developer</DescContent>
              </ContentWrapper>
            </Col>
        </Row>
    </MiddleBlockSection>
  );
};

export default withTranslation()(TeamBlock);
