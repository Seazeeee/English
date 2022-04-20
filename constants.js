import { motion } from "framer-motion";
export const MyComponent = () => {
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, rotate: 360 }
  };
  return (
    <motion.div initial="initial" animate="animate" variants={variants} />
  );
};
