import { Marquee } from "./marquee"
import ReactLogo from "@/assets/react.svg"
import JavaLogo from "@/assets/java.svg"
import PythonLogo from "@/assets/python.svg"
import FigmaLogo from "@/assets/figma.svg"
import DockerLogo from "@/assets/docker.svg"
import AwsLogo from "@/assets/aws.svg"
import NodeLogo from "@/assets/node.svg"
import SpringBootLogo from "@/assets/spring.svg"
import CapcutLogo from "@/assets/capcut.svg"

const logos = [
  {
    name: "React",
    logo: <img src={ReactLogo} alt="React" className="w-12 h-12" />,
  },
  {
    name: "Java",
    logo: <img src={JavaLogo} alt="Java" className="w-12 h-12" />,
  },
  {
    name: "Python",
    logo: <img src={PythonLogo} alt="Python" className="w-12 h-12" />,
  },
  {
    name: "Figma",
    logo: <img src={FigmaLogo} alt="Figma" className="w-12 h-12" />,
  },
  {
    name: "Docker",
    logo: <img src={DockerLogo} alt="Docker" className="w-12 h-12" />,
  },
  {
    name: "AWS",
    logo: <img src={AwsLogo} alt="AWS" className="w-12 h-12" />,
  },
  {
    name: "Node",
    logo: <img src={NodeLogo} alt="Node" className="w-12 h-12" />,
  },
  {
    name: "Spring Boot",
    logo: <img src={SpringBootLogo} alt="Spring Boot" className="w-12 h-12" />,
  },
  {
    name: "Capcut",
    logo: <img src={CapcutLogo} alt="Capcut" className="w-12 h-12" />,
  },
]

export function MarqueeDemo() {
  return (
    <div className="w-full overflow-hidden">
      <Marquee className="py-4" speed={30}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="relative h-full w-fit mx-8 flex items-center justify-center"
          >
            {logo.logo}
          </div>
        ))}
      </Marquee>
    </div>
  )
} 