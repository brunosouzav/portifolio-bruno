import { FeatureSteps } from "@/components/ui/feature-steps"
import { MarqueeDemo } from "@/components/ui/marquee-demo"
import { motion } from "framer-motion"

const features = [
  {
    title: "Desenvolvedor Full Stack",
    description: "Desenvolvimento de aplicações web utilizando Java, Spring Boot e AWS. Experiência em microservices, RESTful APIs e arquitetura de software escalável.",
    content: "Desenvolvimento de aplicações web utilizando Java, Spring Boot e AWS. Experiência em microservices, RESTful APIs e arquitetura de software escalável.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    step: "01"
  },
  {
    title: "Designer",
    description: "Criação de interfaces modernas e intuitivas utilizando Figma. Desenvolvimento de wireframes, protótipos e design systems para aplicações web e mobile.",
    content: "Criação de interfaces modernas e intuitivas utilizando Figma. Desenvolvimento de wireframes, protótipos e design systems para aplicações web e mobile.",
    image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=2071&auto=format&fit=crop",
    step: "02"
  },
  {
    title: "Editor de Vídeo",
    description: "Edição profissional de vídeos utilizando CapCut. Criação de conteúdo visual impactante com efeitos, transições e trilhas sonoras personalizadas.",
    content: "Edição profissional de vídeos utilizando CapCut. Criação de conteúdo visual impactante com efeitos, transições e trilhas sonoras personalizadas.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop",
    step: "03"
  }
]

function ToolsSection() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        > Ferramentas de Trabalho
        </motion.h2>
      </div>
    </div>
  )
}

export function FeatureStepsDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-20"
    >
      <FeatureSteps
        features={features}
        title="About"
        autoPlayInterval={5000}
        imageHeight="h-[400px]"
      />
      <ToolsSection />
      <div className="mt-20">
        <MarqueeDemo />
      </div>
    </motion.div>
  )
} 