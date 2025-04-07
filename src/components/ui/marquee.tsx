import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  pauseOnHover?: boolean
  speed?: number
}

export function Marquee({
  children,
  className,
  pauseOnHover = true,
  speed = 20,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden",
        pauseOnHover && "hover:[animation-play-state:paused]",
        className
      )}
      {...props}
    >
      <div className="flex shrink-0 items-center justify-around gap-8 animate-marquee" style={{ "--speed": `${speed}s` } as React.CSSProperties}>
        {children}
      </div>
      <div className="flex shrink-0 items-center justify-around gap-8 animate-marquee" style={{ "--speed": `${speed}s` } as React.CSSProperties}>
        {children}
      </div>
    </div>
  )
} 