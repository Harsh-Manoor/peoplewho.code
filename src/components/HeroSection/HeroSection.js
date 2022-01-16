import React from 'react'
import "./HeroSection.css"

const HeroSection = () => {

    const parallax = (e) => {
        let x = (window.innerWidth / 2 - e.pageX) * 0.01;
        let y = (window.innerHeight / 2 - e.pageY) * 0.01;
        document.querySelector(".heroSectionImage").style.transform = `translate(${x}px, ${y}px)`;

    }

    return (
        <>
            <section className="hero-section" onMouseMove={parallax}>
                <img className="heroSectionImage" src="images/herosectionimage.png" alt="heroImage"/>
                <h2>The Coding Community</h2>
                <div className="w-node">
                    <i class="fab fa-whatsapp whatsappIcon"></i>
                    <p>let's start talking</p>
                    <i class="fas fa-arrow-right arrowIcon"></i>
                </div>
            </section>

            <section className="community-section">
                <div className="about-community">
                    <h2>Another coding community?</h2>
                    <p>Umm... No. We're The Coding Community.May sound weird, but we're a bunch of 4-something people who are a cobination of designers, coder and developers, who want to give back to the community. <br/>
                    Too early? Who cares. We're not the most experienced - but we're working on a lot of stuff & want you to be a part of our journey.
                    </p>
                </div>
                <img src="images/community.png" alt="communityImage"/>
            </section>

            <section className="">
                <img src="images/rocket.png" alt="rocketImage"/>
                <div className="">
                    <h2>What's in it for You?</h2>
                    
                </div>
            </section>

            <section>
                <div className="">
                    <h2>Become a mentor...</h2>
                    <p>If you’re a person who wants to give back to the community, we’ve got something for you.</p>
                </div>
                <img src='images/mentor.png' alt="mentorImage"/>
            </section>
        </>
    )
}

export default HeroSection
