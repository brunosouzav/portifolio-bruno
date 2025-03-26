'use client'

import { SplineScene } from "./splite"
import { Card } from "./card"
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const roles = ["Full Stack Developer", "UX Designer"]
const TYPING_SPEED = 150
const ERASING_SPEED = 100
const PAUSE_TIME = 2000

export function SplineSceneBasic() {
  const [text, setText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    
    if (isTyping) {
      if (text !== roles[roleIndex]) {
        timeout = setTimeout(() => {
          setText(roles[roleIndex].slice(0, text.length + 1))
        }, TYPING_SPEED)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, PAUSE_TIME)
      }
    } else {
      if (text) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1))
        }, ERASING_SPEED)
      } else {
        setRoleIndex((current) => (current + 1) % roles.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, isTyping, roleIndex])

  return (
    <Card className="w-full h-[80vh] bg-black relative overflow-hidden border-0">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-4 md:p-8 relative z-10 flex flex-col justify-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 tracking-tight leading-tight mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Bruno Souza
          </motion.h1>
          <motion.div 
            className="mt-12 text-neutral-300 max-w-lg text-lg md:text-2xl flex items-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
            <span>{text}</span>
            <span className="ml-1 w-[2px] h-8 bg-neutral-300 animate-pulse"></span>
          </motion.div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative h-[50vh] md:h-full">
          <div className="absolute inset-0 scale-90 md:scale-100">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </Card>
  )
} 