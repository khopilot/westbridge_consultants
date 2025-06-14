import React from 'react'

interface AnimationToggleProps {
  isAnimationEnabled: boolean
  onToggle: (enabled: boolean) => void
  className?: string
}

const AnimationToggle: React.FC<AnimationToggleProps> = ({ 
  isAnimationEnabled, 
  onToggle, 
  className = '' 
}) => {
  return (
    <button
      onClick={() => onToggle(!isAnimationEnabled)}
      className={`animation-toggle ${isAnimationEnabled ? 'animation-toggle--active' : ''} ${className}`}
      aria-label={`${isAnimationEnabled ? 'Disable' : 'Enable'} background animation`}
      title={`${isAnimationEnabled ? 'Disable' : 'Enable'} background animation`}
    >
      <svg 
        width="18" 
        height="18" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {isAnimationEnabled ? (
          <>
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" stroke="currentColor" strokeWidth="1.5"/>
          </>
        ) : (
          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24M9.88 9.88L3.7 3.7M9.88 9.88v10.54M14.12 14.12L21.3 21.3M14.12 14.12V3.58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        )}
      </svg>
    </button>
  )
}

export default AnimationToggle 