import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
        style={{padding:"10px 10px"}}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <Extra>
        <Container border={true}>
          <Row
            justify="center"
            align="middle"
            style={{ flexDirection:"column" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="footer_logo.png"
                  aria-label="homepage"
                  width="10%"
                />
              </LogoContainer>
            </NavLink>
            <h5 style={{fontSize:"16px", color:"white", fontWeight:"normal"}}>All rights reserved 2021</h5>
            <FooterContainer>
              <SocialLink
                href="https://discord.gg/5GkXb3DUmG"
                src="footer_discord.svg"
              />
              <SocialLink
                href="https://twitter.com/metabaes"
                src="footer_twitter.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
