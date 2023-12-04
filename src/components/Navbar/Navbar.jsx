import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import { Planets } from "@/utils/planets";
import "./navbar.scss";

const Navbar = () => {
    return (
        <nav className="navbar _active">
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
                <button><Image src={Planets.Planet1} alt="planet-1"/></button>
                <ul className="navbar__planet-selector__content">
                    <li><button><Image src={Planets.Planet1} /> Planet 1</button></li>
                    <li><button><Image src={Planets.Planet2} /> Planet 2</button></li>
                    <li><button><Image src={Planets.Planet3} /> Planet 3</button></li>
                    <li><button><Image src={Planets.Planet4} /> Planet 4</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;