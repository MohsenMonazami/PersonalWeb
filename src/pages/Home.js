import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Skillspic from "../images/Skillspic.png";
import ExperiencePik from "../images/ExperiencePic.png"
import { useRef } from "react";
import Headroom from "react-headroom";

const Home = () => {
  const ref = useRef();

  return (
    <div>
      <Parallax className="parallax-fix " pages={10}>
        <ParallaxLayer sticky={{start: 0 , end: 9}}>
          <Navbar />
        </ParallaxLayer>

        <ParallaxLayer>
          <Landing />
        </ParallaxLayer>

        <ParallaxLayer
          className="parallax-back"
          factor={1.5}
          offset={1}
          speed={0.5}
          style={{
            backgroundImage: `url(${Skillspic})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer speed={1.5} offset={1} factor={2}>
          <h1 className="section-title">- Skills -</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={2.4}>
          <Skills />
        </ParallaxLayer>

        <ParallaxLayer
          className="parallax-back"
          factor={1.5}
          offset={3.5}
          speed={0.5}
          style={{
            backgroundImage: `url(${ExperiencePik})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer speed={1.5} offset={3.5} factor={2.5}>
          <h1 className="section-title"> - Experiences - </h1>
        </ParallaxLayer>

      </Parallax>

    </div>
  );
};

export default Home;
