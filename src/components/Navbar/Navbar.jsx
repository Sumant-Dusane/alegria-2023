"use client"

import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import "./navbar.scss";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isActive, setActive] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', handleNavbarBg);
    }, [])
    const handleNavbarBg = () => {
        window.scrollY > (window.innerHeight - 100) ? setActive(true) : setActive(false);
    }
    return (
        <nav className={isActive ? "navbar active" : "navbar" }>
            <Link href='/'><Image src={Logo} alt="Alegria 2023" /></Link>
            <ul className="navbar__navs">
                <li><Link href="#" >Passes</Link></li>
                <li><Link href="#" >About</Link></li>
                <li><Link href="#" >Artists</Link></li>
                <li><Link href="#" >Events</Link></li>
                <li><Link href="#" >Brochure</Link></li>
                <li><Link href="#" >More</Link></li>
            </ul>

            <div></div>
        </nav>
    )
}

export default Navbar;