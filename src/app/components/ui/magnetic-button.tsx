import React, { useRef, useState } from "react";
import { motion } from "motion/react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  variant = "primary",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // Magnetic strength (adjust for more/less pull)
    const strength = 0.3;
    setPosition({
      x: deltaX * strength,
      y: deltaY * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses =
    "group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-full transition-all overflow-hidden";

  const variantClasses = {
    primary:
      "bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-2xl hover:shadow-white/20",
    secondary:
      "border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <motion.span
        className="relative z-10"
        animate={{
          x: position.x * 0.1,
          y: position.y * 0.1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        {children}
      </motion.span>

      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            variant === "primary"
              ? "radial-gradient(circle at center, rgba(59, 130, 246, 0.3), transparent 70%)"
              : "radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent 70%)",
        }}
        animate={{
          x: position.x * 0.5,
          y: position.y * 0.5,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={combinedClasses}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      className={combinedClasses}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
}
