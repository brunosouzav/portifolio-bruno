import './About.css'
import { EvervaultCard } from './ui/evervault-card'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import reactLogo from '../assets/react.svg'
import nodeLogo from '../assets/node.svg'
import typescriptLogo from '../assets/typescript.svg'
import pythonLogo from '../assets/python.svg'
import javaLogo from '../assets/java.svg'
import springLogo from '../assets/spring.svg'
import dockerLogo from '../assets/docker.svg'
import awsLogo from '../assets/aws.svg'
import figmaLogo from '../assets/figma.svg'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-container">
        <div className="about-content">
          <motion.h1 
            className="about-title"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About
            <div className="title-glow"></div>
          </motion.h1>
          <div className="about-text-container">
            <motion.p 
              className="about-description"
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Sou um engenheiro de software especializado em desenvolvimento web e automação de processos, focado em criar soluções eficientes, escaláveis e inovadoras. Minha experiência abrange desde o design de aplicações robustas até a implementação de sistemas que otimizam fluxos de trabalho e reduzem esforços manuais.

              Com uma abordagem orientada a resultados, desenvolvo aplicações modernas que atendem às necessidades dos usuários e do negócio, garantindo alto desempenho, segurança e manutenibilidade. Tenho experiência em arquiteturas web, desenvolvimento full stack e integração de APIs, além de aplicar metodologias ágeis para entrega eficiente de projetos.

              Meu trabalho em automação de processos visa eliminar tarefas repetitivas, aumentar a produtividade e reduzir erros operacionais. Trabalho com a criação de scripts inteligentes, bots e fluxos automatizados que permitem às empresas otimizar tempo e recursos, tornando suas operações mais eficientes.

              Além do desenvolvimento de software, também possuo habilidades em design, criando interfaces intuitivas e atraentes que proporcionam uma experiência otimizada ao usuário. Trabalho com o design de layouts modernos, usabilidade e identidade visual para garantir que produtos digitais sejam funcionais e visualmente impactantes.

              Além disso, busco constantemente aprimorar minhas habilidades e me manter atualizado com as melhores práticas do mercado, adotando tecnologias de ponta para entregar soluções inovadoras e personalizadas.
            </motion.p>
            <motion.div 
              className="tools-section"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <h2 className="tools-title">Utilizando ferramentas como:</h2>
              <motion.div 
                className="tools-grid"
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
                <EvervaultCard text="React" image={reactLogo} />
                <EvervaultCard text="Node" image={nodeLogo} />
                <EvervaultCard text="TypeScript" image={typescriptLogo} />
                <EvervaultCard text="Python" image={pythonLogo} />
                <EvervaultCard text="Java" image={javaLogo} />
                <EvervaultCard text="Spring" image={springLogo} />
                <EvervaultCard text="Docker" image={dockerLogo} />
                <EvervaultCard text="AWS" image={awsLogo} />
                <EvervaultCard text="Figma" image={figmaLogo} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 