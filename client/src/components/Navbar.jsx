import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Ref for GSAP (prevents disappearing issue)
  const navRef = useRef();

  // ✅ GSAP Animation (Fixed)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
      );

      gsap.from(".logo-text", {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      });

      gsap.from(".nav-item", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        delay: 1,
      });

      gsap.from("#contactButton", {
        scale: 0,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: "back",
      });
    }, navRef); // 🔥 scope to navbar only

    return () => ctx.revert(); // ✅ cleanup (VERY IMPORTANT)
  }, []);

  // ✅ Close mobile menu when link clicked
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  // ✅ Smooth scroll to contact
  const scrollToContact = () => {
    document.getElementById("contactSection")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // ✅ NEW: navigation function// To move to all Sections

  const goToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav ref={navRef} className="sticky top-0 bg-white left-0 right-0 z-50">
      <div className="container px-5 py-3 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-bold text-4xl text-[#3f396d] logo-text">
          Portfolio
        </a>

        {/* Mobile Menu Button */}
        <button
          className="nav-menu md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-[#fca61f]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {/* Menu */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex justify-center w-full md:w-auto`}
        >
          <ul className="navbar-nav flex flex-col md:flex-row gap-10 text-lg">
            {/* <li className="nav-item">
              <a href="#" onClick={handleLinkClick}>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#Skills" onClick={handleLinkClick}>
                My Skills
              </a>
            </li>

            <li className="nav-item">
              <a href="#About" onClick={handleLinkClick}>
                About
              </a>
            </li>

            <li className="nav-item">
              <a href="#Portfolio" onClick={handleLinkClick}>
                Work
              </a>
            </li> */}
            <li className="nav-item">
              <a href="#" onClick={() => goToSection("home")}>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#" onClick={() => goToSection("about")}>
                My Skills
              </a>
            </li>

            <li className="nav-item">
              <a href="#" onClick={() => goToSection("service")}>
                About
              </a>
            </li>

            <li className="nav-item">
              <a href="#" onClick={() => goToSection("portfolio")}>
                Work
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Button */}
        <button
          id="contactButton"
          onClick={scrollToContact}
          className="c-btn ms-4 py-2 px-6 rounded-full hidden md:block bg-[#fca61f] text-white"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

// error

// import { useState, useEffect, useRef } from "react";
// import gsap from "gsap";
// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navRef = useRef();
//   const navigate = useNavigate(); // ✅ added

//   // ✅ GSAP Animation (same as yours)
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         navRef.current,
//         { y: -80, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1 },
//       );

//       gsap.from(".logo-text", {
//         x: -50,
//         opacity: 0,
//         duration: 1,
//         delay: 0.5,
//       });

//       gsap.from(".nav-item", {
//         opacity: 0,
//         duration: 0.5,
//         stagger: 0.2,
//         delay: 1,
//       });

//       gsap.from("#contactButton", {
//         scale: 0,
//         opacity: 0,
//         duration: 1,
//         delay: 1.5,
//         ease: "back",
//       });
//     }, navRef);

//     return () => ctx.revert();
//   }, []);

//   // ✅ NEW: navigation function
//   const goToSection = (id) => {
//     navigate("/"); // go to home

//     setTimeout(() => {
//       const el = document.getElementById(id);
//       if (el) {
//         el.scrollIntoView({ behavior: "smooth" });
//       }
//     }, 100);

//     setIsOpen(false);
//   };

//   // ✅ Contact scroll (same logic but safe)
//   const scrollToContact = () => {
//     goToSection("contactSection");
//   };

//   return (
//     <nav ref={navRef} className="sticky top-0 bg-white left-0 right-0 z-50">
//       <div className="container px-5 py-3 flex flex-wrap items-center justify-between">
//         {/* ✅ FIXED LOGO */}
//         <Link to="/" className="font-bold text-4xl text-[#3f396d] logo-text">
//           Portfolio
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           className="nav-menu md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-6 h-6 text-[#fca61f]"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//             />
//           </svg>
//         </button>

//         {/* Menu */}
//         <div
//           className={`${
//             isOpen ? "flex" : "hidden"
//           } md:flex justify-center w-full md:w-auto`}
//         >
//           <ul className="navbar-nav flex flex-col md:flex-row gap-10 text-lg">
//             {/* ✅ Home */}
//             <li className="nav-item">
//               <Link to="/" onClick={() => setIsOpen(false)}>
//                 Home
//               </Link>
//             </li>

//             {/* ✅ Skills (your ID = about section) */}
//             <li className="nav-item" onClick={() => goToSection("about")}>
//               My Skills
//             </li>

//             {/* ✅ About (same section in your code) */}
//             <li className="nav-item" onClick={() => goToSection("about")}>
//               About
//             </li>

//             {/* ✅ Work */}
//             <li className="nav-item" onClick={() => goToSection("portfolio")}>
//               Work
//             </li>
//           </ul>
//         </div>

//         {/* Contact Button */}
//         <button
//           id="contactButton"
//           onClick={scrollToContact}
//           className="c-btn ms-4 py-2 px-6 rounded-full hidden md:block bg-[#fca61f] text-white"
//         >
//           Contact
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
