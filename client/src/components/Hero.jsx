import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold leading-tight mb-6"
        >
          Hi, I’m Prashik <br />
          <span className="text-gray-400 text-3xl md:text-4xl">
            SQL Developer | React Developer
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-400 max-w-xl mb-8"
        >
          I build real-world applications, optimize databases, and solve
          production-level issues with scalable solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
          >
            View My Work
          </a>

          <a
            href="#work"
            className="px-6 py-3 border border-gray-600 rounded-xl hover:border-white transition"
          >
            Work With Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
