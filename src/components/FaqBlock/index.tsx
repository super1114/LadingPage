import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import Title  from "../../common/Title";
import FaqItem  from "../../common/FaqItem";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface FaqItemProps {
  question: string;
  answer: string;
}
interface FaqBlockProps {
  content: Array<FaqItemProps>;
  id: string;
}

const FaqBlock = ({ content, id }: FaqBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="left">
        <Row justify="center" align="middle" id={id}>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Title >FAQ</Title>
            </Col>
          </ContentWrapper>
        </Row>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              {content.map((item:FaqItemProps, index)=>{
                return (<FaqItem question={item.question} answer={item.answer} key={index} />)
              })}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(FaqBlock);
