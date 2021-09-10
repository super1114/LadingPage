import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  LogoText,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    interface SocialLinkProps {
      href: string;
      src: string;
    }
    const SocialLink = ({ href, src }: SocialLinkProps) => {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          key={src}
          aria-label={src}
        >
          <SvgIcon src={src} width="25px" height="25px" />
        </a>
      );
    };
    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("home")}>
          <Span>{t("HOME")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>{t("ABOUT")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("roadmap")}>
          <Span>{t("ROADMAP")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("rarity")}>
          <Span>{t("RARITY")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("faq")}>
          <Span>{t("UTILITY AND FAQ")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
          <SocialLink
                href="https://twitter.com"
                src="twitter.svg"
              />
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
          <SocialLink
                href="https://discord.com"
                src="discord.svg"
              />
        </CustomNavLinkSmall>
        
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.png" width="100px" height="74px" />
            <LogoText>METABAES</LogoText>
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
