"use client";
import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export type AnimationType =
  | "fadeUp"
  | "fadeDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "rotateIn"
  | "slideUpFade"
  | "bounceUp";

interface RevealWrapperProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const animationStyles: Record<AnimationType, { initial: string; animate: string }> = {
  fadeUp: {
    initial: "opacity-0 translate-y-8",
    animate: "opacity-100 translate-y-0"
  },
  fadeDown: {
    initial: "opacity-0 -translate-y-8",
    animate: "opacity-100 translate-y-0"
  },
  slideLeft: {
    initial: "opacity-0 translate-x-8",
    animate: "opacity-100 translate-x-0"
  },
  slideRight: {
    initial: "opacity-0 -translate-x-8",
    animate: "opacity-100 translate-x-0"
  },
  scaleUp: {
    initial: "opacity-0 scale-95",
    animate: "opacity-100 scale-100"
  },
  rotateIn: {
    initial: "opacity-0 -rotate-12 scale-95",
    animate: "opacity-100 rotate-0 scale-100"
  },
  slideUpFade: {
    initial: "opacity-0 translate-y-12 scale-95",
    animate: "opacity-100 translate-y-0 scale-100"
  },
  bounceUp: {
    initial: "opacity-0 translate-y-16 scale-90",
    animate: "opacity-100 translate-y-0 scale-100"
  }
};

export const RevealWrapper: React.FC<RevealWrapperProps> = ({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
  className,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
}) => {
  const { ref, isVisible } = useReveal({ threshold, rootMargin, triggerOnce });

  const styles = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out will-change-transform",
        isVisible ? styles.animate : styles.initial,
        className
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
};

interface StaggerRevealProps {
  children: React.ReactNode[];
  animation?: AnimationType;
  staggerDelay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export const StaggerReveal: React.FC<StaggerRevealProps> = ({
  children,
  animation = "fadeUp",
  staggerDelay = 0.1,
  duration = 0.6,
  className,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
}) => {
  return (
    <>
      {children.map((child, index) => (
        <RevealWrapper
          key={index}
          animation={animation}
          delay={index * staggerDelay}
          duration={duration}
          className={className}
          threshold={threshold}
          rootMargin={rootMargin}
        >
          {child}
        </RevealWrapper>
      ))}
    </>
  );
};