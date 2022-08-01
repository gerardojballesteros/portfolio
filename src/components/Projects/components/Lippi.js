import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';


export const Lippi = () => {

    useEffect(() => {
      
        ScrollTrigger.matchMedia({
            "(min-width: 735px)": function(){
                let boxTitleOpacity = gsap.timeline( {
                    scrollTrigger:{
                        trigger: '.lippi',
                        start: 'top center',
                        end: '+=150%',
                        scrub: 1,
                    }
                  })
                  boxTitleOpacity.to('.title__box', {duration: 1, opacity: 1})

                let boxTitle = gsap.timeline( {
                    scrollTrigger:{
                        trigger: '.lippi',
                        start: 'center center',
                        end: '+=170%',
                        pin: true,
                        scrub: true,
                    }
                  })
                    boxTitle.to('.box__text', { duration: 10, height: '0vh', opacity: 1 })
                    

                    let boxText = gsap.timeline( {
                        scrollTrigger:{
                            trigger: '.box__projects',
                            start: 'center center',
                            end: '+=160%',
                            scrub: true,
                        }
                      })
                    boxText.to('#t1', {duration: 1, opacity: 1})
                    boxText.to('#t1', {duration: 1, opacity: 1})
                    boxText.to('#t1', {duration: 1, opacity: 0})
                    boxText.to('#t2', {duration: 1, opacity: 1})
                    boxText.to('body', {duration: 1, background: '#fff'})
                       

            }})

    }, [])
    

  return (
    <>
        <section className="lippi">
            <div className="lippi__content">
                <div className="box__text">
                    <div className="bg__box"></div>
                   <div className="title__box">
                    <h1>Projects I did for a big brand like as</h1>
                   </div>
                </div>
                <div className="box__projects">
                    <div className="title__projects">
                        <h1 id="t1">Projects I did for a big brand like as</h1>
                        <h1 id="t2">Lippi outdoor</h1>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
