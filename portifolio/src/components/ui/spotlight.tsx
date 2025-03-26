import React from "react"
import { cn } from "../../lib/utils"

interface SpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  fill?: string
}

export function Spotlight({ className, fill = "white", ...props }: SpotlightProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-30 transition duration-300 lg:absolute",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 z-[-1] bg-gradient-to-tr from-[#0ea5e9] to-[#a855f7] opacity-20 blur-3xl" />
      <div
        className="absolute inset-0 z-[-1] bg-gradient-to-tr from-[#0ea5e9] to-[#a855f7] opacity-20 blur-3xl"
        style={{
          background: `radial-gradient(circle at center, ${fill} 0%, transparent 70%)`,
        }}
      />
    </div>
  )
} 