'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade' | 'slide' | 'scale';
  delay?: number;
  duration?: number;
}

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 },
  },
  scale: {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 },
  },
};

export function AnimatedContainer({
  children,
  className,
  animation = 'fade',
  delay = 0,
  duration = 0.3,
}: AnimatedContainerProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={cn('w-full', className)}
        initial={animations[animation].initial}
        animate={animations[animation].animate}
        exit={animations[animation].exit}
        transition={{
          duration,
          delay,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

interface AnimatedPageProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedPage({ children, className }: AnimatedPageProps) {
  return (
    <motion.div
      className={cn('min-h-screen', className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedResultProps {
  children: React.ReactNode;
  className?: string;
  show: boolean;
}

export function AnimatedResult({ children, className, show }: AnimatedResultProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={cn('w-full', className)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.3,
            ease: 'easeOut',
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
} 