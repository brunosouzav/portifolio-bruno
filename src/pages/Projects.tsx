
import { GlowingEffectDemo } from "@/components/ui/glowing-effect-demo";

const Projects = () => {
  return (
    <section className="min-h-screen bg-black/[0.96] flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-white">Projects</h1>
      <div className="w-full max-w-7xl">
        <GlowingEffectDemo />
      </div>
    </section>
  )
}

export default Projects
