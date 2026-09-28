import { motion, useReducedMotion } from "framer-motion";

// Every page is wrapped in <Page> so it fades in / out when you navigate.
export default function Page({ children }) {
  const reduce = useReducedMotion();
  return (
    <motion.main
      className="page"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.main>
  );
}
