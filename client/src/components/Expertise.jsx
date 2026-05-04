import { useEffect, useRef } from "react";
import gsap from "gsap";

function Expertise() {
  const expRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-heading", {
        opacity: 0,
        y: 50,
        duration: 1,
      });

      gsap.from(".exp-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
      });
    }, expRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={expRef} className="py-12 bg-gray-50" id="service">
      <div className="w-full max-w-7xl mx-auto px-5 text-center">
        {/* Heading */}
        <h2 className="exp-heading text-3xl font-bold text-gray-800 mb-6">
          My Expertise
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* <div className="bg-white rounded-lg p-6 shadow-md hover:scale-105 transition duration-300 text-center"> */}
          <div className=" bg-white rounded-lg p-6 shadow-md hover:scale-105 transition duration-300 text-center">
            <img src="/src/assets/service-icon1.png" className="mx-auto h-20" />
            <h3 className="text-xl font-semibold mt-4">Web Design</h3>
            <p className="text-gray-600 mt-2">
              Crafting beautiful and functional websites with a focus on user
              experience.
            </p>
          </div>

          <div className=" bg-white rounded-lg p-6 shadow-md hover:scale-105 transition duration-300 text-center">
            <img src="/src/assets/service-icon2.png" className="mx-auto h-20" />
            <h3 className="text-xl font-semibold mt-4">Web Development</h3>
            <p className="text-gray-600 mt-2">
              Building robust and scalable web applications using the latest
              technologies.
            </p>
          </div>

          {/* <div className="bg-white rounded-lg p-6 shadow-md hover:scale-105 transition duration-300 text-center"> */}
          <div className=" bg-white rounded-lg p-6 shadow-md hover:scale-105 transition duration-300 text-center">
            <img src="/src/assets/service-icon3.png" className="mx-auto h-20" />
            <h3 className="text-xl font-semibold mt-4">Debugging</h3>
            <p className="text-gray-600 mt-2">
              Identifying and resolving issues in code to ensure optimal
              performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
