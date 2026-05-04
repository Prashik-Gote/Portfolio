import { useEffect, useRef } from "react";
import gsap from "gsap";

function Home() {
  const homeRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from("#home-text", {
        duration: 1,
        opacity: 0,
        x: -100,
        ease: "power1.out",
      });

      tl.from(
        "#home-description",
        {
          duration: 1,
          opacity: 0,
          x: -100,
          ease: "power1.out",
        },
        "-=0.5",
      );

      tl.from(
        "#home-button",
        {
          duration: 1.2,
          opacity: 0,
          x: -100,
          ease: "power1.out",
        },
        "-=0.3",
      );

      tl.from(
        "#home-image",
        {
          duration: 1,
          opacity: 0,
          scale: 0.8,
          ease: "back",
        },
        "-=0.7",
      );
    }, homeRef);

    return () => ctx.revert(); // ✅ cleanup (VERY IMPORTANT)
  }, []);

  return (
    <section
      ref={homeRef}
      className="pt-1 pb-0.5 bg-gradient-to-r from-[#f2f2ff] to-[#ebf9ff]"
      id="home"
    >
      <div className="container mx-auto px-5 flex flex-col md:flex-row justify-evenly items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2
            id="home-text"
            className="text-[#3f396d] text-5xl md:text-6xl leading-tight"
          >
            Hello! I Am <br />
            <span className="text-[#6f34fe] font-bold text-6xl md:text-7xl">
              Prashik Gote
            </span>
          </h2>

          <p
            id="home-description"
            className="text-gray-600 mt-4 text-lg md:text-xl w-fit"
          >
            I'm an aspiring Web Developer dedicated to crafting responsive and
            user-friendly websites. Excited to explore new technologies and
            improve with every line of code. Always learning and looking to push
            the boundaries of web development. Enthusiastic and quick-learning
            web development fresher, eager to apply foundational skills and grow
            in a professional environment.
          </p>

          <button
            id="home-button"
            className="bg-[#fca61f] text-white text-xl py-3 px-5 rounded-full mt-6"
          >
            <a
              href="/src/assets/Prashik-Resume.pdf"
              download
              className="no-underline text-white"
            >
              Hire Me
            </a>
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <img id="home-image" src="/src/assets/p-removebg.png" alt="profile" />
        </div>
      </div>
    </section>
  );
}

export default Home;
