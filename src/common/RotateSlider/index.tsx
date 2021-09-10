import {useEffect, useState} from 'react'
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { images } from "../../content/SliderContent.json"

const RotateSlider = () => {
  const [goToSlide, setSlide] = useState (0);
  setTimeout(() => {
    setSlide(goToSlide+1);
  }, 1700);
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
        showNavigation={false}
      />
      {/* <div
        style={{
          margin: "0 auto",
          marginTop: "2rem",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          fontSize:"30px"
        }}
      >
          <i className="fa fa-arrow-left" style={{color:"white", cursor:"pointer"}} onClick={()=> {
            setSlide(goToSlide-1);
          }}></i>
          <i className="fa fa-arrow-right" style={{color:"white", cursor:"pointer"}} onClick={()=> {
            setSlide(goToSlide+1);
          }}></i>
      </div> */}
    </div>
  )
};
export default RotateSlider;
