import React from 'react'
import { useSpring, animated } from '@react-spring/web'

const LinearIndeterminateLoader = ({ color = "#3B82F6", height = 4 }) => {
  const props = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(100%)' },
    config: { duration: 1500 },
    loop: true,
  })

  return (
    <div 
      className="w-full overflow-hidden" 
      style={{ height: `${height}px` }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={undefined}
    >
      <animated.div
        className="h-full"
        style={{
          backgroundColor: color,
          ...props,
        }}
      />
    </div>
  )
}

export default LinearIndeterminateLoader;