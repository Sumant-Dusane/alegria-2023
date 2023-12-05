"use client"

import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import { Planets } from "@/utils/planets";
import "./navbar.scss";
import { useState } from "react";

const Navbar = ({ currentPlanet, setCurrentPlanet }) => {
    const [planetSelectorVisibility, setPlanetSelectorVisibility] = useState(false);
    const mapPlanets = () => {
        return Planets.map((planet, index) => {
            return <li><button onClick={() => setCurrentPlanet('planet' + index + 1)}><Image src={planet} alt={'planet' + index + 1} /> Planet {index + 1}</button></li>
        })
    }

    return (
        <nav className="navbar">
            <Link href='/'><Image src={Logo} alt="Alegria 2023" /></Link>

            <ul className="navbar__navs">
                <li><Link href="#" >Passes</Link></li>
                <li><Link href="#" >About</Link></li>
                <li><Link href="#" >Artists</Link></li>
                <li><Link href="#" >Events</Link></li>
                <li><Link href="#" >Brochure</Link></li>
                <li><Link href="#" >More</Link></li>
            </ul>

            <div className="navbar__planet-selector">
                <button onClick={() => setPlanetSelectorVisibility(true)}>
                    <Image
                        src={
                            currentPlanet === 'planet1' ?
                                Planets.Planet1 :
                                currentPlanet === 'planet2' ?
                                    Planets.Planet2 :
                                    currentPlanet == 'planet3' ?
                                        Planets.Planet3 :
                                        Planets.Planet4
                        }
                        alt={currentPlanet}
                    />
                </button>
                <ul className={planetSelectorVisibility ? "navbar__planet-selector__content show" : "navbar__planet-selector__content"}>
                    {/* {mapPlanets()} */}
                    <li><button onClick={() => {setCurrentPlanet('planet1'); setPlanetSelectorVisibility(false);}}><Image src={Planets.Planet1} alt={currentPlanet} /> Planet 1</button></li>
                    <li><button onClick={() => {setCurrentPlanet('planet2'); setPlanetSelectorVisibility(false);}}><Image src={Planets.Planet2} alt={currentPlanet} /> Planet 2</button></li>
                    <li><button onClick={() => {setCurrentPlanet('planet3'); setPlanetSelectorVisibility(false);}}><Image src={Planets.Planet3} alt={currentPlanet} /> Planet 3</button></li>
                    <li><button onClick={() => {setCurrentPlanet('planet4'); setPlanetSelectorVisibility(false);}}><Image src={Planets.Planet4} alt={currentPlanet} /> Planet 4</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;