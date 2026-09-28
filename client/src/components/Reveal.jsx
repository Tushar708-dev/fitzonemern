import { motion, useReducedMotion } from "framer-motion";

// Wrap anything in <Reveal> and it fades + slides up when you scroll it into view.
// Use `delay` to make a row of cards appear one after another (stagger).
export default function Reveal({ children, delay = 0, y = 40, className = "" }) {
  const reduce = useReducedMotion(); // respects "reduce motion" phone/PC setting
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
