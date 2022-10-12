import { useEffect, useState } from "react"
import mars from '../../assets/video-marte-perseverance.mp4'
import thor from '../../assets/thor.mp4'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { Lippi } from "./components/Lippi";
import { ProjectsLippi } from "./components/ProjectsLippi";
gsap.registerPlugin(ScrollTrigger);


export const Projects = () => {

  const PauseVideoMars = useRef(null);
  const PlayVideoMars = useRef(null);
  const PauseVideoMish = useRef(null);
  const PlayVideoMish = useRef(null);
  const [isPlayingMars, setIsPlayingMars] = useState(false);
  const [isPlayingMish, setIsPlayingMish] = useState(false);

  const handlePauseMars = () => {
    PauseVideoMars.current.pause();
    setIsPlayingMars(true);
  }

  const handlePlayMars = () => {
    PlayVideoMars.current.play();
    setIsPlayingMars(false);
  }

  const handlePauseMish = () => {
    PauseVideoMish.current.pause();
    setIsPlayingMish(true);
  }

  const handlePlayMish = () => {
    PlayVideoMish.current.play();
    setIsPlayingMish(false);
  }

  useEffect(() => {


    ScrollTrigger.matchMedia({
      "(min-width: 735px)": function(){
        let video = gsap.timeline( {
          scrollTrigger:{
              trigger: '#video',
              start: '-350px center',
              end: '+=73%',
              scrub: true,
              toggleActions: "play reverse play reset",
          }
        })
      video.to('#video', { duration: 1, scale: 1.5, yPercent: 20 })
      let background = gsap.timeline( {
        scrollTrigger:{
            trigger: '#video',
            start: '-330px center',
            end: '1230px bottom',
            scrub: true,
            toggleActions: "play reverse play reset",
        }
      })
      background.to('.bg', { duration: 1, scale: 2, yPercent: 20, opacity: 0.5 })
      }
    });
  }, []);


  return (
    <section className="projects">
        <div className="projects__content">
            <div className="projects__content__title">
                <h1>Some of the projects</h1>
                <h1>I have worked on.</h1>
            </div>
            <div className="marsmellow">
              <div className="marsmellow__content">
                <video id="video" ref={isPlayingMars ? PlayVideoMars : PauseVideoMars} autoPlay={true} muted loop playsInline >
                  <source  src={mars} type="video/mp4"/>
                </video>
                <div className="playstop">
                  <div className="circle" >
                    {!isPlayingMars ?(
                      <FontAwesomeIcon icon={faPause} onClick={handlePauseMars} />
                    ) : (
                      <FontAwesomeIcon icon={faPlay} onClick={handlePlayMars} />
                    ) }
                  </div>
                </div>
                <div className="bg"></div>
                <div className="text">
                  <div className="text__content">
                    <img src="https://res.cloudinary.com/underverse-clothing/image/upload/dpr_2.0,q_auto:best/v1651965315/Marsmellow/logo/logo-marsmellow-text-white.png" alt="" />
                    <h3>Mars as <strong>never seen before.</strong></h3>
                    <p>Through the Marsmellow app you will be able to see the latest images photographed on 
                      mars by the spirit, opportunity, curiosity and perseverance rovers. 
                      Remember that these images are updated by the image bank of the
                       <strong>National Aeronautics and Space Administration (Nasa)</strong></p>
                       <div className="btn-white">
                        <a href="https://www.marsmellow.app" target="_blank">Go to Marsmellow</a>
                       </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mish">
              <div className="mish__content">
                <video id="video" ref={isPlayingMish ? PlayVideoMish : PauseVideoMish} autoPlay={true} muted loop playsInline >
                  <source  src={thor} type="video/mp4"/>
                </video>
                <div className="playstop">
                  <div className="circle" >
                    {!isPlayingMish ?(
                      <FontAwesomeIcon icon={faPause} onClick={handlePauseMish} />
                    ) : (
                      <FontAwesomeIcon icon={faPlay} onClick={handlePlayMish} />
                    ) }
                  </div>
                </div>
                <div className="bg-2"></div>
                <div className="text">
                  <div className="text__content">
                      <h1>Mish.</h1>
                    <h3>App designed for <strong>movie lovers.</strong></h3>
                    <p>Through Mish. you will be able to see all the movies that are currently playing and not only that, you will also find out about new releases coming soon. </p>
                       <div className="btn-white">
                        <a href="https://mish-app.netlify.app" target="_blank">Go to Mish</a>
                       </div>
                  </div>
                </div>
              </div>
            </div>
            <Lippi />
            <ProjectsLippi />
        </div>
    </section>
  )
}
