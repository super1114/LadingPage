import { lazy } from "react";
import RoadmapContent from "../../content/RoadmapContent.json";
import RaratyContent from "../../content/RarityContent.json";
import FaqContent from "../../content/FaqContent.json";
import "../global.css"

const FaqBlock = lazy(() => import("../../components/FaqBlock"));
const RarityBlock = lazy(() => import("../../components/RarityBlock"));
const  Wallet  = lazy(() => import("../../components/Wallet"));
const MachineBlock = lazy(() => import("../../components/MachineBlock"));
const SliderBlock = lazy(() => import("../../components/SliderBlock"));
const TeamBlock = lazy(() => import("../../components/TeamBlock"));
const Roadmap = lazy(() => import("../../components/Roadmap"));
const Container = lazy(() => import("../../common/Container"));
const Title = lazy(() => import("../../common/Title"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
 
const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <MachineBlock
        id="home"
      />
      <SliderBlock 
        type="left"
        id="about"
      />
      <Title id="roadmap">Roadmap</Title>
      <Roadmap
        type="right"
        content={ RoadmapContent.roadmap1 }
        css={{left:"0%", top:"-2px", width:"7%"}}
        percent="0%"
        id="roadmap1"
      />
      <Roadmap
        type="left"
        content={ RoadmapContent.roadmap2 }
        css={{left:"22%", top:"-2px", width:"7%"}}
        percent="25%"
        id="roadmap2"
      />
      <Roadmap
        type="right"
        content={ RoadmapContent.roadmap3 }
        css={{left:"46%", top:"-2px", width:"7%"}}
        percent="50%"
        id="roadmap3"
      />
      <Roadmap
        type="left"
        content={ RoadmapContent.roadmap4 }
        css={{left:"72%", top:"-2px", width:"7%"}}
        percent="75%"
        id="roadmap4"
      />
      <Roadmap
        type="right"
        content={ RoadmapContent.roadmap5 }
        css={{left:"93%", top:"-2px", width:"7%"}}
        percent="100%"
        id="roadmap5"
      />
      <Title id="rarity">Rarity</Title>
      <RarityBlock
        type="right"
        column1={RaratyContent.column1.content}
        column2={RaratyContent.column2.content}
        column3={RaratyContent.column3.content}
        id="rarity"
      />
      <FaqBlock
        content={FaqContent.content}
        id="faq"
      />
      <Title id="team">The Bae Team</Title>
      <TeamBlock/>
    </Container>
  );
};

export default Home;
