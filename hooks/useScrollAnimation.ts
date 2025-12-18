import React, { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  staggerDelay?: number;
}

export function useScrollAnimation(
  itemCount: number,
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.15, staggerDelay = 150 } = options;
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    Array(itemCount).fill(false)
  );
  const [isMobile, setIsMobile] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());

    const container = containerRef.current;
    if (!container || hasAnimated.current) return;

    const isDesktop = !checkMobile();

    if (isDesktop) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated.current) {
              hasAnimated.current = true;
              for (let i = 0; i < itemCount; i++) {
                setTimeout(() => {
                  setVisibleItems((prev) => {
                    const updated = [...prev];
                    updated[i] = true;
                    return updated;
                  });
                }, i * staggerDelay);
              }
            }
          });
        },
        { threshold }
      );

      observer.observe(container);
      return () => observer.disconnect();
    } else {
      setVisibleItems(Array(itemCount).fill(true));
      hasAnimated.current = true;
    }
  }, [itemCount, threshold, staggerDelay]);

  const getCardStyle = (index: number): React.CSSProperties => {
    if (isMobile) {
      return {};
    }
    return {
      opacity: visibleItems[index] ? 1 : 0,
      transform: visibleItems[index] ? 'translateY(0)' : 'translateY(30px)',
      transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
    };
  };

  return { containerRef, visibleItems, getCardStyle };
}
