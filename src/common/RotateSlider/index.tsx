import {useEffect, useState} from 'react'
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { images } from "../../content/SliderContent.json"
const RotateSlider = () => {
  const [isActive, setIsActive] = useState (false);
  const [goToSlide, setSlide] = useState (0);
  useEffect(()=> {
    
  },[isActive]);
  const slides = images.map((item, key) => {
    return {key:key, content:<img src={item} />}
  })
  console.log(slides);
  
  return (
    <div style={{ width: "100%", height: "300px", margin: "0 auto" }}>
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={2}
        animationConfig={config}
        showNavigation={true}
      />
      <div
        style={{
          margin: "0 auto",
          marginTop: "2rem",
          width: "50%",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
      </div>
    </div>
  )
};
export default RotateSlider;
