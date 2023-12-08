"use client"

import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import "./navbar.scss";
import { useRef, useEffect } from "react";

const Navbar = () => {
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

            <div></div>
        </nav>
    )
}

export default Navbar;