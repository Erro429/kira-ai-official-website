import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device immediately to save resources
    // If it's a touch device, we don't render the custom cursor at all
    if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) {
        setIsTouch(true);
        return;
    }

    let animationFrameId: number;
    let mouseX = -100;
    let mouseY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const render = () => {
      if (cursorRef.current) {
        // Direct mapping for instant response (no drag/lag) - Lowest overhead possible
        // translate3d forces GPU acceleration
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Simple check for interactive elements
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      }
    };

    const onMouseOut = () => {
        setIsHovering(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    
    // Start render loop
    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  // Don't render on touch devices or until mouse moves
  if (isTouch || !isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center transition-all duration-200 ease-out"
      style={{ 
        width: isHovering ? '32px' : '12px',
        height: isHovering ? '32px' : '12px',
        border: '1.5px solid rgba(255, 255, 255, 0.9)',
        backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
        borderRadius: '50%',
        willChange: 'transform, width, height',
        mixBlendMode: 'difference'
      }}
    >
    </div>
  );
};

export default CustomCursor;