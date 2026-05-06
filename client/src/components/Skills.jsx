function Skills() {
  return (
    <section
      className="skill py-5 bg-gradient-to-r from-[#f2f2ff] to-[#ebf9ff]"
      id="about"
    >
      <div className="container mt-7 mb-7 mx-auto flex flex-col md:flex-row justify-evenly">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 mt-12 md:mt-8 px-4">
          <div className="grid grid-cols-3 gap-2 justify-items-center">
            <div>
              <div className="icon-card text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                  alt="HTML"
                  className="w-14"
                />
                <p className="text mt-2">HTML</p>
              </div>
            </div>

            <div>
              <div className="icon-card text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                  alt="CSS"
                  className="w-14"
                />
                <p className="text mt-2">CSS</p>
              </div>
            </div>

            <div>
              <div className="icon-card text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                  alt="JavaScript"
                  className="w-14"
                />
                <p className="text mt-2">JavaScript</p>
              </div>
            </div>

            <div>
              <div className="icon-card text-center mt-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
                  alt="Bootstrap"
                  className="w-14"
                />
                <p className="text mt-2">Bootstrap</p>
              </div>
            </div>

            <div>
              <div className="icon-card text-center mt-7">
                <img
                  src="/tailwind-css.svg"
                  alt="Tailwind"
                  className="w-14 ml-4"
                />
                <p className="text mt-5">Tailwind CSS</p>
              </div>
            </div>

            <div>
              <div className="icon-card text-center mt-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
                  alt="SQL"
                  className="w-14"
                />
                <p className="text mt-2">SQL</p>
              </div>
            </div>

            <div>
              <div className="icon-card text-center mt-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png"
                  alt="MySQL"
                  className="w-14"
                />
                <p className="text mt-2">MySQL</p>
              </div>
            </div>

            <div>
              <div className="icon-card text-center mt-5">
                <img src="/sql-server.svg" alt="MSSQL" className="w-14" />
                <p className="text mt-2">MSSQL</p>
              </div>
            </div>

            <div>
              <div className="icon-card text-center mt-5 ml-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="Git"
                  className="w-14"
                />
                <p className="text mt-2">Git&GitHub</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 px-4">
          <div className="heading mt-5 md:mt-3">
            <small className="text-[#6f34fe] text-xl font-semibold">
              My Skills
            </small>

            <h3 className="text-[#3f396d] font-bold text-3xl md:text-4xl mt-2">
              Beautiful & Digital Experiences
            </h3>

            <p className="para-size text-gray-600 mt-4">
              I'm Prashik, a Frontend Developer on an exciting journey in web
              innovation. My odyssey began at Shree Nithya Enterprises, where I
              started as a Software Support Executive and quickly developed
              skills in SQL, MSSQL, MySQL with strong understanding of
              networking concepts, protocols, and technologies (e.g., TCP/IP,
              DNS, DHCP, LAN/WAN).
            </p>

            <p className="para-size text-gray-600 mt-4">
              With a growing passion for web development and exciting projects
              on the horizon, the future of web development is exciting, and I'm
              thrilled to be a part of it!{" "}
            </p>

            <button className="bg-[#fca61f] text-white text-xl py-3 px-5 rounded-full mt-6 hover:translate-y-[-5px] transition-all duration-1000">
              <a
                href="/Prashik-Resume.pdf"
                download
                className="no-underline text-white"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
