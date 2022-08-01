import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const AboutMe = () => {

    const AboutMeTitle = useRef();
    const AboutMeText = useRef();

    useEffect(() => {

        ScrollTrigger.matchMedia({
            "(min-width: 735px)": function(){
                let aboutall = gsap.timeline({
                    scrollTrigger:{
                        trigger: '.about-me',
                        start: 'top bottom',
                        scrub: 1,
                        end: 'bottom bottom',
                    },
                })
                aboutall.to('.about-me', {opacity: 1, duration: 1})
                let abouTitle = gsap.timeline({
                    scrollTrigger:{
                        trigger: AboutMeTitle.current,
                        start: 'top bottom',
                        end: '300px bottom',
                        scrub: 1,
                        opacity: 0,
                    },
                })
                
                let aboutTxt = gsap.timeline({
                    scrollTrigger:{
                        trigger: AboutMeText.current,
                        start: 'top bottom',
                        end: '500px bottom',
                        scrub: 1,
                        opacity: 0,
                    },
                })
                aboutTxt.from(AboutMeText.current, {opacity: 0, yPercent: 50, duration: 1})
                aboutTxt.to(AboutMeText.current, {opacity: 1, yPercent: 0, duration: 4})

            },
            "(max-width: 734px)": function(){
                let aboutall = gsap.timeline({
                    scrollTrigger:{
                        trigger: '.about-me',
                        start: 'top bottom',
                        scrub: 1,
                        end: 'bottom bottom',
                    },
                })
                aboutall.to('.about-me', {opacity: 1, duration: 1})
                let abouTitle = gsap.timeline({
                    scrollTrigger:{
                        trigger: AboutMeTitle.current,
                        start: 'top bottom',
                        end: '300px bottom',
                        scrub: 1,
                        opacity: 0,
                    },
                })
                abouTitle.from(AboutMeTitle.current, {opacity: 0, yPercent: 30, duration: 1})
                abouTitle.to(AboutMeTitle.current, {opacity: 1, yPercent: 0, duration: 4})

                let aboutTxt = gsap.timeline({
                    scrollTrigger:{
                        trigger: AboutMeText.current,
                        start: '-100px bottom',
                        end: '300px bottom',
                        scrub: 1,
                        opacity: 0,
                    },
                })
                aboutTxt.from(AboutMeText.current, {opacity: 0, yPercent: 30, duration: 1})
                aboutTxt.to(AboutMeText.current, {opacity: 1, yPercent: 0, duration: 4})

            }

        })
        
    }, []);

    return (
        <section className="about-me" >
            <article className="txt">
                <div className="title" ref={AboutMeTitle}>
                    <h1>About me</h1>
                </div>
                <div className="text-content" ref={AboutMeText}>
                    <p>
                        My name is Gerardo Ballesteros, I was born in Barquisimeto, Venezuela on February 14th
                        but I currently live in Chile. I ve always been an enthusiastic and creative person, my love
                        for art and computer science led me to this beautiful path of front end development.
                        From learning UI/UX using tools like Figma, to using one of the most popular frameworks
                        like React JS. I invite you to take a closer look at my development skills.
                    </p>
                </div>
            </article>
        </section>
    )
}
