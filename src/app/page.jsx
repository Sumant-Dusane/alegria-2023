import Image from "next/image";
import "./page.scss";
import { Planets } from "@/utils/planets";
import ArrowBtn from "@/assets/images/arrow.svg";

export default function Home() {
  return (
    <div className="landing">
      <div className="planets">
        <div className="planet" >
          <Image src={Planets.Planet1} alt="Planet 1" />
        </div>
        <div className="planet">
          <Image src={Planets.Planet2} alt="Planet 2" />
        </div>
        <div className="planet">
          <Image src={Planets.Planet3} alt="Planet 3" />
        </div>
        <div className="planet">
          <Image src={Planets.Planet4} alt="Planet 4" />
        </div>
      </div>
      <button className="navigate-btn">
        <Image src={ArrowBtn} />
      </button>
    </div>
  )
}
