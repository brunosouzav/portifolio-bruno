import  { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"


interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "About",
  autoPlayInterval = 3000
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  useEffect(() => {
    if (!isAutoPlaying || !isInView) return;

    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval, isAutoPlaying, isInView])

  const handleFeatureClick = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentFeature(index)
    setProgress(0)
  }

  return (
    <div ref={ref} className={`p-8 md:p-12 ${className}`}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center text-white"
        >
          {title}
        </motion.h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <motion.div 
            className="order-2 md:order-1 space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8 cursor-pointer"
                initial={{ opacity: 0.3, x: -50 }}
                animate={isInView ? { 
                  opacity: index === currentFeature ? 1 : 0.3,
                  x: 0,
                  scale: index === currentFeature ? 1.05 : 1
                } : { opacity: 0.3, x: -50 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleFeatureClick(index)}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 ${
                    index === currentFeature
                      ? "bg-white border-white text-black scale-110"
                      : "bg-gray-800 border-gray-700"
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm md:text-lg text-gray-400">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="order-1 md:order-2 relative h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-lg overflow-hidden"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={isInView ? { y: 0, opacity: 1, rotateX: 0 } : { y: 100, opacity: 0, rotateX: -20 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover transition-transform transform"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 