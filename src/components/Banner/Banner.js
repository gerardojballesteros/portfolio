import React from 'react'


const Banner = () => {
    return (
        <>
        <section className="banner">
            <div className="banner__content">
                <div className="bg-profile"></div>
                <picture id="img-profile">
                    <source 
                    media="(min-width: 734px)" 
                    srcset="https://res.cloudinary.com/underverse-clothing/image/upload/dpr_2.0,f_auto,q_auto/v1649545872/portfolio/yo_drz6mm.png"
                    />
                    <source 
                    media="(min-width: 1068px)" 
                    srcset="https://res.cloudinary.com/underverse-clothing/image/upload/dpr_2.0,f_auto,q_auto/v1649545872/portfolio/yo_drz6mm.png"
                    />
                    <source 
                    media="(min-width: 1440px)" 
                    srcset="https://res.cloudinary.com/underverse-clothing/image/upload/dpr_2.0,f_auto,q_auto/v1649545872/portfolio/yo_drz6mm.png"
                    />
                    <source 
                    media="(min-width: 0px)"
                    srcset="https://res.cloudinary.com/underverse-clothing/image/upload/dpr_2.0,f_auto,q_auto/v1649545872/portfolio/yo_drz6mm.png"/>
                    <img src="https://res.cloudinary.com/underverse-clothing/image/upload/dpr_2.0,f_auto,q_auto/v1649545872/portfolio/yo_drz6mm.png" alt="" />
                </picture>
                <article className="txt">
                    <h3>WELCOME TO MY</h3>
                    <h1>PORTFOLIO</h1>
                    <p>GERARDO J. BALLESTEROS G <strong>&#123; FRONTEND DEVELOPER &#125;</strong></p>
                    <picture className="logos">
                        <a href="">
                            <img src="https://res.cloudinary.com/underverse-clothing/image/upload/v1649552370/portfolio/icons/zncqiznbae3orbvgm4ru.svg" alt="" />
                        </a>
                        <a href="">
                            <img src="https://res.cloudinary.com/underverse-clothing/image/upload/v1649552370/portfolio/icons/odcinbwj9ewhseqimeqc.svg" alt="" />
                        </a>
                    </picture>
                </article>
            </div>
        </section>
        </>
    )
}

export default Banner
