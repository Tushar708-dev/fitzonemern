import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

// A number that counts up from 0 when it scrolls into view.  <CountUp to={5000} suffix="+" />
export default function CountUp({ to, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = v.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, decimals]);

  return <span ref={ref}>{(0).toFixed(decimals)}{suffix}</span>;
}
