import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/dogechef.jpeg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Doge</h3>
        <p>
          I am Doge, the founder of Doge Shop. Affiliated to
          Doge Taste...
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
