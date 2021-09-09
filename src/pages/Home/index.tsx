import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import RoadmapContent from "../../content/RoadmapContent.json";
import RaratyContent from "../../content/RarityContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";


const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const RarityBlock = lazy(() => import("../../components/RarityBlock"));
const MachineBlock = lazy(() => import("../../components/MachineBlock"));
const Roadmap = lazy(() => import("../../components/Roadmap"));
const Container = lazy(() => import("../../common/Container"));
const Title = lazy(() => import("../../common/Title"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
 
const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <MachineBlock
        image="machine1.png"
        id="machine"
      />
      <Title>Roadmap</Title>
      <Roadmap
        type="right"
        content={ RoadmapContent.roadmap1 }
        css={{left:"0%", top:"0%", width:"7%"}}
        percent="0%"
        id="about"
      />
      <Roadmap
        type="left"
        content={ RoadmapContent.roadmap2 }
        css={{left:"22%", top:"0px", width:"7%"}}
        percent="25%"
        id="about"
      />
      <Roadmap
        type="right"
        content={ RoadmapContent.roadmap3 }
        css={{left:"46%", top:"0px", width:"7%"}}
        percent="50%"
        id="about"
      />
      <Roadmap
        type="left"
        content={ RoadmapContent.roadmap4 }
        css={{left:"72%", top:"0px", width:"7%"}}
        percent="75%"
        id="about"
      />
      <Roadmap
        type="right"
        content={ RoadmapContent.roadmap5 }
        css={{left:"93%", top:"0px", width:"7%"}}
        percent="100%"
        id="about"
      />
       <RarityBlock
        type="right"
        content={RaratyContent.content}
        id="mission"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
