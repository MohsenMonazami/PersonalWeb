import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../styles/Skills.css";
import HTML from "../images/HTML.png";
import CSS from "../images/CSS.png";
import SASS from "../images/SASS.png";
import Bootstrap from "../images/Bootstrap.png";
import React from "../images/React.png";
import Figma from "../images/Figma.png";
import Next from "../images/Next.png"
import JS from "../images/JS.png"
import Git from "../images/Git.png"
import Photoshop from "../images/Photoshop.png"
import Illustrator from "../images/Illustrator.png"
import Adobexd from "../images/AdobeXd.png"

const Skills = () => {
  return (
    <div>
      <div className="row mt-5 justify-content-center p-10">

        <div className="col-lg-3 col-md-4 col-sm-12 mt-7">

          <div className="row justify-content-center mb-2">
            <div className="skill-box">
              <img src={HTML} className="skill-img" />
              <p className="skill-title">HTML</p>
              <div className="rate-box">
                <div className="rate html"></div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="skill-box">
              <img src={CSS} className="skill-img" />
              <p className="skill-title">CSS</p>
              <div className="rate-box">
                <div className="rate css"></div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="skill-box">
              <img src={SASS} className="skill-img" />
              <p className="skill-title">SASS</p>
              <div className="rate-box">
                <div className="rate sass"></div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="col-lg-3 col-md-4 col-sm-12">

        <div className="row justify-content-center">
            <div className="skill-box">
              <img src={Bootstrap} className="skill-img" />
              <p className="skill-title">Bootstrap</p>
              <div className="rate-box">
                <div className="rate sass"></div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="skill-box">
              <img src={Next} className="skill-img" />
              <p className="skill-title">Next.JS</p>
              <div className="rate-box">
                <div className="rate next"></div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="skill-box">
              <img src={Photoshop} className="skill-img" />
              <p className="skill-title">Photoshop</p>
              <div className="rate-box">
                <div className="rate photoshop"></div>
              </div>
            </div>
          </div>

        </div>

        <div className="col-lg-3 col-md-4 col-sm-12 mt-7">

        <div className="row justify-content-center">
            <div className="skill-box">
              <img src={React} className="skill-img" />
              <p className="skill-title">React.JS</p>
              <div className="rate-box">
                <div className="rate react"></div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="skill-box">
              <img src={Git} className="skill-img" />
              <p className="skill-title">Git</p>
              <div className="rate-box">
                <div className="rate git"></div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="skill-box">
              <img src={Illustrator} className="skill-img" />
              <p className="skill-title">Illustrator</p>
              <div className="rate-box">
                <div className="rate ill"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-12">

        <div className="row justify-content-center mb-2">
            <div className="skill-box">
              <img src={JS} className="skill-img" />
              <p className="skill-title">JavaScript</p>
              <div className="rate-box">
                <div className="rate js"></div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="skill-box">
              <img src={Figma} className="skill-img" />
              <p className="skill-title">Figma</p>
              <div className="rate-box">
                <div className="rate figma"></div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="skill-box">
              <img src={Adobexd} className="skill-img" />
              <p className="skill-title">AdobeXd</p>
              <div className="rate-box">
                <div className="rate adobexd"></div>
              </div>
            </div>
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default Skills;
