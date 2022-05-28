import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import youtube from "../../Assets/Requird-image/youtube.png"
import hotstar from "../../Assets/Requird-image/hotstar.png"
import bigbasket from "../../Assets/Requird-image/bigbasket.png"
import bobbi from "../../Assets/Requird-image/bobbi.png"
import McDonald from "../../Assets/Requird-image/mcd.png"



export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={bobbi}
                  alt="bobbibrowncosmetics.com"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Bobbi Brown-clone</h2>
              <p>
              "Bobbi Brown Cosmetics is a global commercial E-
Commerce website for beauty products. Built on HTML, CSS, JavaScript for front end and Localstorage on backend. It's a team project completed executed in 6 days.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <IoLogoJavascript />
                <SiNodedotjs />
                {/* <SiExpress />
                <SiMongodb /> */}
              </div>
              <div>
                <a
                  href="https://bobbi-brown-clone-arshad-abhinav-yogesh-shivanshu-rahul-nikesh.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/iYogeshkumar/Bobbi-Brown-Cosmetics"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={bigbasket}
                  alt="bigbasket-clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Big Basket - Clone</h2>
              <p>
              A web application to purchase grocery items..
              </p>
              <div>
                <IoLogoJavascript />
                {/* <FaReact /> */}
                <SiNodedotjs />
                <DiCss3 />
                <SiHtml5 />
                
                {/* <SiExpress />
                <SiMongodb /> */}
              </div>
              <div>
                <a
                  href="https://bigbasket-clone26.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/iYogeshkumar/Big-Basket"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={youtube}
                  alt="Youtube clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Youtube Clone </h2>
              <p>
                Mini project of Youtube clone on HTML, CSS, JavaScript for front end and youtube API for showing the videos. 
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                {/* <SiNodedotjs /> */}
                <IoLogoJavascript />
                {/* <SiExpress /> */}
                {/* <SiMongodb /> */}
              </div>
              <div>
                <a
                  href="https://fancy-biscuit-8987a1.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                  See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/iYogeshkumar/youtube-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={hotstar}
                  alt="HOTSTAR"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Hotstar-OMDB</h2>
              <p>
                Mini project of A Hotstar-OMDB built using HTML, CSS, and JavaScript.
              </p>
              <div>
                {/* <FaReact /> */}
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
                
              </div>
              <div>
                <a
                  href="https://polite-paprenjak-b5e857.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/iYogeshkumar/Hotstar-OMDB"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={McDonald}
                  alt="McDonald's Virtual Restaurent"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>McDonald's Virtual Restaurent</h2>
              <p>
              Mini project of A McDonald's Digital Restaurent for order food. Built using HTML, CSS, and JavaScript.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://vigilant-almeida-a8cd3b.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/iYogeshkumar/mcdonaldDigitalRestaurant"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
