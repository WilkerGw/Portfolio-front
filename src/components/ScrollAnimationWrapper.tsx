"use client";

import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

type ScrollAnimationWrapperProps = {
  children: ReactNode;
  className?: string;
};

export function ScrollAnimationWrapper({
  children,
  className = "",
}: ScrollAnimationWrapperProps) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (

    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}