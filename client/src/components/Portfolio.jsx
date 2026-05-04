function Portfolio() {
  return (
    <section className="portfolio mt-5 mb-5" id="portfolio">
      {/* Heading */}
      <div className="heading text-center pt-5">
        <small className="text-gray-500">Creative Work</small>
        <h3 className="text-3xl font-bold">Check My Portfolio</h3>
      </div>

      {/* Portfolio Body */}
      <div className="portfolio-body mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="hover:scale-105 transition duration-300">
              <div className="card rounded-lg shadow-md">
                <img
                  src="/src/assets/Cynthia Ugwu-3.png"
                  className="rounded-t-lg"
                  alt="Cynthia Ugwu"
                />
                <div className="card-body text-center p-4">
                  <h4 className="text-xl font-semibold mb-2">
                    <a
                      href="https://cynthia-ugwu-by-prashik-gote.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Cynthia Ugwu
                    </a>
                  </h4>

                  <div className="flex flex-wrap justify-center">
                    <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-sm mr-1 mb-1">
                      HTML & CSS
                    </span>
                    <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-sm mr-1 mb-1">
                      JavaScript
                    </span>
                  </div>

                  <a
                    href="https://cynthia-ugwu-by-prashik-gote.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="hover:scale-105 transition duration-300">
              <div className="rounded-lg shadow-md">
                <img
                  src="/src/assets/currency-converter-3.png"
                  className="rounded-t-lg"
                  alt="Converter App"
                />
                <div className="card-body text-center p-4">
                  <h4 className="text-xl font-semibold mb-2">Converter App</h4>

                  <div className="flex flex-wrap justify-center">
                    <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-sm mr-1 mb-1">
                      HTML & CSS
                    </span>
                    <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-sm mr-1 mb-1">
                      JavaScript
                    </span>
                  </div>

                  <a
                    href="https://github.com/Prashik-Gote"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="hover:scale-105 transition duration-300">
              <div className="card rounded-lg shadow-md">
                <img
                  src="/src/assets/Weather.png"
                  className="rounded-t-lg"
                  alt="Weather App"
                />
                <div className="card-body text-center p-4">
                  <h4 className="text-xl font-semibold mb-2">Weather App</h4>

                  <div className="flex flex-wrap justify-center">
                    <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-sm mr-1 mb-1">
                      HTML & CSS
                    </span>
                    <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-sm mr-1 mb-1">
                      JavaScript
                    </span>
                  </div>

                  <a
                    href="https://github.com/Prashik-Gote"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
