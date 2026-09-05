import React, {useState, useEffect} from "react";

import'./Portfolio.css';

import { pageMap } from "jsx/portfolio/SectionList";

import burguerIcon from '/svg/ui/lines_white.svg';

import { BreakScroll } from "js/BreakScroll";

import { DevCredits, BuildVersion, FooterLinks } from "jsx/portfolio/Footer";
import { ProfileDisplay } from "jsx/portfolio/NavigationBar";
import { SectionDisplay, ContentDisplay } from "jsx/portfolio/ContentDisplay";

export default
function Portfolio() {
    const [activeSection, setActiveSection] = useState(pageMap.home.id);
    const [isBurguerMenu, setBurguerMenu] = useState(false);

    // UseEffect
    BreakScroll(isBurguerMenu);

    return (
        <main className="portfolio" style={{}}> 

            {isBurguerMenu &&
                <menu className="containerMenu">
                    <canvas style={{backgroundColor:'black', opacity:'0.7'}} onClick={() => setBurguerMenu(!isBurguerMenu)}/>
                    <nav>
                        <p>Nothing Here</p>
                    </nav>
                </menu>
            }
            <nav className="navigationBar">
                <ProfileDisplay/>
                <div className='section'>
                    {/* Temporary */}
                    <SectionDisplay SetActiveSection={setActiveSection} SetBurguerMenu={setBurguerMenu} PageMap={pageMap}/>
                    <a onClick={() => setBurguerMenu(!isBurguerMenu)} style={{borderLeft: 'var(--border) solid var(--color_borders)'}}>
                        <img src={burguerIcon} alt={null} style={{width: '18px'}}/>
                    </a>
                </div>
            </nav>

            <section className="contentDisplay">
                <div className='content'>

                    {/* Temporary */}
                    <ContentDisplay ActiveSection={activeSection} PageMap={pageMap}/>

                </div>
            </section>

            <footer className="footer">
                <DevCredits/>
                <FooterLinks/>
                <BuildVersion/>
            </footer>
        </main>
    )
}
