import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {

    const skillsOne = useRef();
    const skillsTwo = useRef();
    const skillsThree = useRef();
    const skillsFour = useRef();
    const skillsFive = useRef();
    const skillsKeyboard = useRef();
    const skillsTitleTop = useRef();
    const javascript = useRef();
    const javascriptTitle = useRef();
    const jsKb = useRef();

    useEffect(() => {
        ScrollTrigger.matchMedia({
            "(min-width: 735px)": function(){

                gsap.timeline( {
                    scrollTrigger:{
                        trigger: javascript.current,
                        start: 'top top',
                        end: '180%',
                        pin: true,
                        toggleActions: "play reverse play reset",
                    }
                })
                

                let jsTitle = gsap.timeline({
                    scrollTrigger:{
                        trigger: javascriptTitle.current,
                        start: '-300px top',
                        end: '200px',
                        scrub: true,
                        toggleActions: "play reverse play reset",
                    }, 
                })
                jsTitle.to(javascriptTitle.current, {opacity: 0, yPercent: -200, duration: 1, overflow: 'invisible'})

                let jsKeyboard = gsap.timeline({
                    scrollTrigger:{
                        trigger: jsKb.current,
                        start: '-300px top',
                        end: '400px',
                        scrub: true,
                        toggleActions: "play reverse play reset",
                    }, duration: 1
                })
                jsKeyboard.to(jsKb.current, {scale: 1.6, yPercent: -84, duration: 16})
                jsKeyboard.to('#guess', {opacity: 1, duration: 10})
                jsKeyboard.to('#guess', {opacity: 0, duration: 20})
                jsKeyboard.to('.text-js', {opacity: 1, y: -80, duration: 10})
                jsKeyboard.to(jsKb.current, {scale: 1.6, yPercent: 50, duration: 20})

                let txtRight = gsap.timeline({
                    scrollTrigger:{
                        trigger: jsKb.current,
                        start: '380px top',
                        end: '1000px',
                        scrub: 1,
                        toggleActions: "play reverse play reset",
                    }, duration: 1
                })
                txtRight.to('.txt-right', {opacity: 1, x: -2200, duration: 50})


                let txtLeft = gsap.timeline({
                    scrollTrigger:{
                        trigger: jsKb.current,
                        start: '380px top',
                        end: '1000px',
                        scrub: 1,
                        toggleActions: "play reverse play reset",
                    }, duration: 1
                })
                txtLeft.to('.txt-left', {opacity: 1, x: 1300, duration: 50})
                
                let SkillsKeyboard = gsap.timeline({
                    scrollTrigger:{
                        trigger: skillsKeyboard.current,
                        start: 'top bottom',
                        end: '500px bottom',
                        toggleActions: "play reverse play reset",
                        scrub: true,
                        opacity: 0,
                        duration: 3
                    },
                })
                SkillsKeyboard.from(skillsKeyboard.current, {opacity: 0, yPercent: 30, duration: 1})
                SkillsKeyboard.to(skillsKeyboard.current, {opacity: 1, yPercent: 0, duration: 1})


                let SkillsTitleTop = gsap.timeline({
                    scrollTrigger:{
                        trigger: skillsTitleTop.current,
                        start: '-200px bottom',
                        end: '500vw bottom',
                        toggleActions: "play reverse play reset",
                        scrub: true,
                        opacity: 0,
                        duration: 3
                    },
                })
                SkillsTitleTop.from(skillsTitleTop.current, {opacity: 0, yPercent: 30, duration: 1})
                SkillsTitleTop.to(skillsTitleTop.current, {opacity: 1, yPercent: 0, duration: 1})

                let SkillsOne = gsap.timeline({
                    scrollTrigger:{
                        trigger: skillsOne.current,
                        start: 'top bottom',
                        end: '500px bottom',
                        toggleActions: "play reverse play reset",
                        scrub: true,
                        opacity: 0,
                        duration: 3
                    },
                })
                SkillsOne.from(skillsOne.current, {opacity: 0, yPercent: 30})
                SkillsOne.to(skillsOne.current, {opacity: 1, yPercent: 0, duration: 1})

                let SkillsTwo = gsap.timeline({
                    scrollTrigger:{
                        trigger: skillsTwo.current,
                        start: 'top bottom',
                        end: '600px bottom',
                        toggleActions: "play reverse play reset",
                        scrub: true,
                        opacity: 0,
                        duration: 3
                    },
                })
                SkillsTwo.from(skillsTwo.current, {opacity: 0, yPercent: 30, duration: 1})
                SkillsTwo.to(skillsTwo.current, {opacity: 1, yPercent: 0, duration: 1})
                
                let SkillsThree = gsap.timeline({
                    scrollTrigger:{
                        trigger: skillsThree.current,
                        start: '-100px bottom',
                        end: '500px bottom',
                        toggleActions: "play reverse play reset",
                        scrub: true,
                        opacity: 0,
                        duration: 3
                    },
                })
                SkillsThree.from(skillsThree.current, {opacity: 0, yPercent: 30, duration: 1})
                SkillsThree.to(skillsThree.current, {opacity: 1, yPercent: 0, duration: 1})
        
                let SkillsFour = gsap.timeline({
                    scrollTrigger:{
                        trigger: skillsFour.current,
                        start: '-100px bottom',
                        end: '650px bottom',
                        toggleActions: "play reverse play reset",
                        scrub: true,
                        opacity: 0,
                        duration: 3
                    },
                })
                SkillsFour.from(skillsFour.current, {opacity: 0, yPercent: 30, duration: 1})
                SkillsFour.to(skillsFour.current, {opacity: 1, yPercent: 0, duration: 1})

            },
            "(max-width: 734px)": function(){
                let SkillsTitleTop = gsap.timeline({
                    scrollTrigger:{
                        trigger: skillsTitleTop.current,
                        start: 'top bottom',
                        end: '300px bottom',
                        scrub: 2,
                        opacity: 0,
                        duration: 3,
                    },
                })
                SkillsTitleTop.from(skillsTitleTop.current, {opacity: 0, yPercent: 10, duration: 1})
                SkillsTitleTop.to(skillsTitleTop.current, {opacity: 1, yPercent: 0, duration: 1})
                


                let SkillsOne = gsap.timeline({
                    scrollTrigger:{
                        trigger: skillsOne.current,
                        start: 'top bottom',
                        end: '300px bottom',
                        
                        scrub: true,
                        opacity: 0,
                        duration: 3
                    },
                })
                SkillsOne.from(skillsOne.current, {opacity: 0, yPercent: 10})
                SkillsOne.to(skillsOne.current, {opacity: 1, yPercent: 0, duration: 1})
                

                let SkillsTwo = gsap.timeline({
                    scrollTrigger:{
                        trigger: skillsTwo.current,
                        start: '-100px bottom',
                        end: '300px bottom',
                        
                        scrub: true,
                        opacity: 0,
                        duration: 3
                    },
                })
                SkillsTwo.from(skillsTwo.current, {opacity: 0, yPercent: 10, duration: 1})
                SkillsTwo.to(skillsTwo.current, {opacity: 1, yPercent: 0, duration: 1})

                let SkillsThree = gsap.timeline({
                    scrollTrigger:{
                        trigger: skillsThree.current,
                        start: '-200px bottom',
                        end: '300px bottom',
                        
                        scrub: true,
                        opacity: 0,
                        duration: 3
                    },
                })
                SkillsThree.from(skillsThree.current, {opacity: 0, yPercent: 10, duration: 1})
                SkillsThree.to(skillsThree.current, {opacity: 1, yPercent: 0, duration: 1})

                let SkillsFour = gsap.timeline({
                    scrollTrigger:{
                        trigger: skillsFour.current,
                        start: '-300px bottom',
                        end: '300px bottom',
                        
                        scrub: true,
                        opacity: 0,
                        duration: 3
                    },
                })
                SkillsFour.from(skillsFour.current, {opacity: 0, yPercent: 10, duration: 1})
                SkillsFour.to(skillsFour.current, {opacity: 1, yPercent: 0, duration: 1})

                let SkillsFive = gsap.timeline({
                    scrollTrigger:{
                        trigger: skillsFive.current,
                        start: '-300px bottom',
                        end: '300px bottom',
                        
                        scrub: true,
                        opacity: 0,
                        duration: 3,
                    },
                })
                SkillsFive.from(skillsFive.current, {opacity: 0, yPercent: 0, duration: 1})
                SkillsFive.to(skillsFive.current, {opacity: 1, yPercent: 0, duration: 1})


            },

            

        })
       
    }, []);


    return (
        <>
            <section className="skills framework-parents">
                <picture className="keyboard" ref={skillsKeyboard}>
                    <img src="https://res.cloudinary.com/underverse-clothing/image/upload/v1650005941/portfolio/icons/keyboard.svg" alt="keyboard" />
                </picture>
                <article className="title" ref={skillsTitleTop}>
                    <h1><strong id="my">My</strong> <strong id="dev">development</strong> <br /> <strong id="board">board</strong>
                        <img src="https://res.cloudinary.com/underverse-clothing/image/upload/v1650075458/portfolio/icons/keyboard_mobile.svg" alt="" />
                    </h1>
                </article>
                <div className="row">
                    <div className="bg-gray"></div>
                    <div className="skills__items">
                        <div className="items">
                            <ul ref={skillsOne}>
                                <div className="text-subtitle" >
                                    <p>More than 3 years as a</p>
                                </div>
                                <div className="text-title" >
                                    <h2>
                                    Front-end <br /> Software Engineer.
                                    </h2>
                                </div>
                                <div className="text-description">
                                    <p>Courses taken at</p>
                                    <picture>
                                        <img src="https://res.cloudinary.com/underverse-clothing/image/upload/v1650014023/portfolio/icons/Udemy_New_2021.svg" alt="udemy" />                     
                                        <img src="https://res.cloudinary.com/underverse-clothing/image/upload/v1650013580/portfolio/icons/Platzi.svg" alt="platzi" />
                                        <img src="https://res.cloudinary.com/underverse-clothing/image/upload/v1650014135/portfolio/icons/Harvard_University.svg" alt="harvard" />
                                    </picture>
                                </div>
                            </ul>
                        </div>
                        <div className="items">
                            <ul ref={skillsTwo}>
                                <div className="text-title">
                                    <h2>UI/UX 
                                    design 
                                    experience</h2>
                                </div>
                                <div className="text-description">
                                    <p>Programs I use to design</p>
                                    <picture>
                                        <img src="https://res.cloudinary.com/underverse-clothing/image/upload/v1650012815/portfolio/icons/figma-seeklogo.com.svg" alt="figma"/>
                                    </picture>
                                </div>
                            </ul>
                        </div>
                        <div className="items">
                            <ul ref={skillsThree}>
                                <div className="text-subtitle">
                                    <p>Language</p>
                                </div>
                                <div className="text-title">
                                    <h2>
                                    &#60;HTML <br />
                                    SEMANTIC/&#62;
                                    </h2>
                                </div>
                                <div className="text-rating" >
                                    <p>Advance level</p>
                                </div>
                            </ul>
                        </div>
                        <div className="items">
                        <ul ref={skillsFour}>
                                <div className="text-subtitle">
                                    <p>Language</p>
                                </div>
                                <div className="text-title">
                                    <h2>
                                        CSS <strong>love</strong> <br />
                                        at first sight
                                    </h2>
                                </div>
                                <div className="text-description">
                                    <p>CSS in JS with <strong>Styled-Components</strong> or Preprocessor</p>
                                    <picture>
                                        <img src="https://res.cloudinary.com/underverse-clothing/image/upload/v1650078965/portfolio/icons/sasslogo.svg" alt="sass"/>
                                    </picture>
                                </div>
                                <div className="text-rating" >
                                    <p>Advance level</p>
                                </div>
                            </ul>
                        </div>
                        <div className="items">
                        <ul ref={skillsFive}>
                                <div className="text-subtitle">
                                    <p>Language</p>
                                </div>
                                <div className="text-title">
                                    <h2>
                                        Javascript();
                                        <p>with <strong>TypeScript</strong></p>
                                    </h2>
                                </div>
                        
                                <div className="text-rating" >
                                    <p>Intermediate level</p>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="javascript" ref={javascript}>
                <div className="javascript__content">
                    <article className="title" ref={javascriptTitle}>
                        <h1>My favorite programming <br /> language</h1>
                    </article>
                    <article className="text-left-right">
                        <h1 class="txt-left">console.log(‘hello world’);</h1>
                        <h1 class="txt-right">Simply a beautiful and powerful language</h1>
                    </article>
                    <picture className="keyboard-js" ref={jsKb}>
                        <p id="guess">Guess which one?</p>
                        <img src="https://www.apple.com/v/imac-24/e/images/overview/accessories_keyboard__e1n39q3h7ngy_large_2x.png" alt="" />
                    </picture>
                    <article className="text-js">
                        <h1>JavaScript(); <br /> <p>with <strong>TypeScript</strong></p> </h1>
                    </article>
                </div>
            </section>
        </>
    )
}


