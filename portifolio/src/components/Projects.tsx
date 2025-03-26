import './Projects.css'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GlowingEffectDemo } from './ui/glowing-effect-demo'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="projects-container">
        <div className="projects-content">
          <motion.div 
            className="title-container"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h1 
              className="projects-title"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              Projects
            </motion.h1>
            <motion.div 
              className="title-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
          </motion.div>
          <motion.div 
            className="projects-grid"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <GlowingEffectDemo />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 