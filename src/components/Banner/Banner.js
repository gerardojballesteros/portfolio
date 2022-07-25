import React, {useEffect} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const Banner = () => {
    useEffect(() => {
        gsap.utils.toArray(".panel").forEach((panel, i) => {
            ScrollTrigger.create({
              trigger: panel,
              start: "top top", 
              scrub: true,
              pin: true, 
              pinSpacing: false,
              overwrite: true
            });
          }); 
          ScrollTrigger.create({
          snap: false
          });
    },[]);

    return (
        <>
        <section className="banner panel">
            <div className="banner__content">
                <div className="bg-profile"></div>
                <picture id="img-profile">
                    <source 
                    media="(min-width: 734px)" 
                    srcSet="https://res.cloudinary.com/underverse-clothing/image/upload/dpr_2.0,f_auto,q_auto/v1649545872/portfolio/yo_drz6mm.png"
                    />
                    <source 
                    media="(min-width: 1068px)" 
                    srcSet="https://res.cloudinary.com/underverse-clothing/image/upload/dpr_2.0,f_auto,q_auto/v1649545872/portfolio/yo_drz6mm.png"
                    />
                    <source 
                    media="(min-width: 1440px)" 
                    srcSet="https://res.cloudinary.com/underverse-clothing/image/upload/dpr_2.0,f_auto,q_auto/v1649545872/portfolio/yo_drz6mm.png"
                    />
                    <source 
                    media="(min-width: 0px)"
                    srcSet="https://res.cloudinary.com/underverse-clothing/image/upload/dpr_2.0,f_auto,q_auto/v1649545872/portfolio/yo_drz6mm.png"/>
                    <img src="https://res.cloudinary.com/underverse-clothing/image/upload/dpr_2.0,f_auto,q_auto/v1649545872/portfolio/yo_drz6mm.png" alt="" />
                </picture>
                <article className="txt">
                    <h3>Welcome to my</h3>
                    <h1>Portfolio</h1>
                    <p>Gerardo J. Ballesteros G. | <strong> Front-end Software Engineer.</strong></p>
                    <picture className="logos">
                        <a href="https://github.com/gerardojballesteros" target="_blank">
                            <img src="https://res.cloudinary.com/underverse-clothing/image/upload/v1649552370/portfolio/icons/zncqiznbae3orbvgm4ru.svg" alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/gerardojballesteros" target="_blank">
                            <img src="https://res.cloudinary.com/underverse-clothing/image/upload/v1649552370/portfolio/icons/odcinbwj9ewhseqimeqc.svg" alt="" />
                        </a>
                    </picture>
                </article>
            </div>
        </section>
        </>
    )
}

