import Image from "next/image";
import "./page.scss";
import { Planets } from "@/utils/planets";
import ArrowBtn from "@/assets/images/arrow.svg";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Timeline, Tween } from "react-gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <div className="landing">
      <ScrollTrigger
        trigger="trigger"
        start="top center"
        end="100vh center"
        scrub={0.5}
        marker={true}
        pin={true}
      >
        <div className="planets">
          <Timeline>
            <Tween>
              <div className="planet">
                <Image src={Planets.Planet1} alt="Planet 1" />
              </div>
            </Tween>
            <Tween>
              <div className="planet">
                <Image src={Planets.Planet2} alt="Planet 2" />
              </div>
            </Tween>
            <Tween>
              <div className="planet">
                <Image src={Planets.Planet3} alt="Planet 3" />
              </div>
            </Tween>
            <Tween>
              <div className="planet">
                <Image src={Planets.Planet4} alt="Planet 4" />
              </div>
            </Tween>
          </Timeline>
        </div>
        <button className="navigate-btn">
          <Image src={ArrowBtn} />
        </button>
      </ScrollTrigger>
    </div>
  )
}
