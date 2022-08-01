import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LazyLoad from 'react-lazyload';
gsap.registerPlugin(ScrollTrigger);


export const Frameworks = () => {

    const  FrameworksAll = useRef();
    const  TitleReact = useRef();
    const  ImgReact = useRef();

    useEffect(() => {
        
    ScrollTrigger.matchMedia({

        "(min-width: 735px)": function(){

        let frameworksAll = gsap.timeline({
            scrollTrigger: {
                trigger: FrameworksAll.current,
                start: 'top top',
                end: '80%',
                scrub: true,
                pin: true,
                toggleActions: "play reverse play reset",
                
            }
        })
        frameworksAll.to('.fw', {opacity: 1, duration: .1})

        let titleReact = gsap.timeline({
            scrollTrigger: {
                trigger: TitleReact.current,
                start: '-200px top',
                end: '300%',
                scrub: true,

                toggleActions: "play reverse play reset",
            }
        })
        titleReact.to(TitleReact.current, {opacity: 1, duration: 1, scale: 1, top: -150})
        
        

        let imgReact = gsap.timeline({
            scrollTrigger: {
                trigger: ImgReact.current,
                start: '-200px top',
                end: '40%',
                scrub: true,
                toggleActions: "play reverse play reset",
                
            }
        })
        imgReact.to(ImgReact.current, {opacity: 1, duration: 1, marginTop: '-50px'})

        },
        "(max-width: 734px)": function(){

            // gsap.utils.toArray(".framework-parents").forEach((frameworkPanel, i) => {
            //     ScrollTrigger.create({
            //       trigger: frameworkPanel,
            //       start: "350px top", 
            //       scrub: true,
            //       pin: true, 
            //       pinSpacing: false,
            //     });
            //   }); 
            //   ScrollTrigger.create({
            //   snap: false
            //   });

        },

    });

       
    }, []);


    return (
       
            <section className="fw framework-parents" ref={FrameworksAll}>
                <div className="fw__content">
                    <article className="title" ref={TitleReact}>
                        <h1>The framework <br /> I use the most.</h1>
                    </article>
                    <picture className="img-react" ref={ImgReact}>
                        <img src="https://res.cloudinary.com/underverse-clothing/image/upload/v1650153766/portfolio/icons/react-img_1.svg" alt="" />
                    </picture>
                    <article className="subtitle">
                        <p> React JS | A JavaScript library for building user interfaces <a href="https://es.reactjs.org/" target="_blank">more info</a></p>
                    </article>
                </div>
            </section>
      
    )
}


