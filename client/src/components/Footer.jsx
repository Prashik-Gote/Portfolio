function Footer() {
  return (
    <footer className="bg-[#211e39] py-8 text-center">
      <div className="container mx-auto">
        <h3 className="text-white pt-4 text-2xl">Portfolio</h3>

        <div className="mt-6 flex gap-2 justify-center space-x-6">
          <a
            href="#home"
            className="text-gray-400 hover:text-[#fca61f] text-lg no-underline"
          >
            Home
          </a>

          <span className="text-gray-500 mx-2">|</span>

          <a
            href="#about"
            className="text-gray-400 hover:text-[#fca61f] text-lg no-underline"
          >
            About
          </a>

          <span className="text-gray-500 mx-2">|</span>

          <a
            href="#service"
            className="text-gray-400 hover:text-[#fca61f] text-lg no-underline"
          >
            Skills
          </a>

          <span className="text-gray-500 mx-2">|</span>

          <a
            href="#portfolio"
            className="text-gray-400 hover:text-[#fca61f] text-lg no-underline"
          >
            Work
          </a>

          <span className="text-gray-500 mx-2">|</span>

          <a
            href="#contactSection"
            className="text-gray-400 hover:text-[#fca61f] text-lg no-underline"
          >
            Contact
          </a>
        </div>

        <hr className="my-6 border-gray-600" />
      </div>
    </footer>
  );
}

export default Footer;
