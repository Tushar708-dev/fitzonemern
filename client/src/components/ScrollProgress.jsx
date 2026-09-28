import { motion, useScroll, useSpring } from "framer-motion";

// The thin orange bar at the very top that fills as you scroll down the page.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}
