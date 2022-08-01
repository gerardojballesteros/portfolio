import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

export const ProjectsLippi = () => {


    useEffect(() => {
      
        ScrollTrigger.matchMedia({
            "(min-width: 735px)": function(){
                let boxTitleOpacity = gsap.timeline( {
                    scrollTrigger:{
                        trigger: '.projects__lippi',
                        start: 'top 600px',
                        end: '+=50%',
                        scrub: 1,
                        toggleActions: "play reverse play reset",
                    }
                  })
                  boxTitleOpacity.to('.projects__lippi .projects__lippi__content', {duration: 1, opacity: 1})

            }})
            ScrollTrigger.matchMedia({
                "(max-width: 735px)": function(){
                    let boxTitleOpacity = gsap.timeline( {
                        scrollTrigger:{
                            trigger: '.projects__lippi',
                            start: 'top 600px',
                            end: '+=50%',
                            scrub: 1,
                            
                        }
                      })
                      boxTitleOpacity.to('.projects__lippi .projects__lippi__content', {duration: 1, opacity: 1})
    
                }})

    }, [])


  return (
    <>
        <div className="projects__lippi">
            <div className="projects__lippi__content">
                <div className="projects__sub-title">
                    <h1 className='title-lippi-mobile'>Lippi Outdoor</h1>
                    <p>I hope you like these magnificent websites that I made for <strong>the outdoor giant</strong> in Chile.</p>
                    <div className="img-projects">
                        <img src="https://res.cloudinary.com/lippi-outdoor/image/upload/v1657309586/banner-lippi/montana-negro_jrh9hm.png" alt="" />
                    </div>
                </div>
                <div className="box__items">
                    <div className="box">
                        <div className="image">
                            <img src="https://res.cloudinary.com/lippi-outdoor/image/upload/v1638388114/vulcano/logo-vulcano-dos_athavb.png" alt="" />
                        </div>
                        <div className="btn-transparent">
                            <a href="https://www.lippioutdoor.com/vulcano" target="_blank">See more</a>
                        </div>
                    </div>
                    <div className="box">
                       <div className="image">
                        <img src="https://res.cloudinary.com/lippi-outdoor/image/upload/v1636404410/media/wysiwyg/iconos/logo-andes-blanco.png" alt="" />
                       </div>
                        <div className="btn-transparent">
                            <a href="https://www.lippioutdoor.com/andesblack" target="_blank">See more</a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="https://res.cloudinary.com/lippi-outdoor/image/upload/v1636404540/media/wysiwyg/logo-lippi-mobile-black.png" alt="" />
                        </div>
                        <div className="btn-white">
                            <a href="https://www.lippioutdoor.com/" target="_blank">Go to Lippi home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
