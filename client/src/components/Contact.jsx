import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const formRef = useRef();

  const sendMail = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      contact: formData.get("contact"),
      message: formData.get("message"),
    };

    // ✅ Validation
    if (!data.name || !data.email || !data.message) {
      alert("Please fill all required fields");
      return;
    }

    try {
      // ✅ 1. Save to Database
      await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // ✅ 2. Send Email
      await emailjs.sendForm(
        "service_6u7fsdl",
        "template_75xwf35",
        formRef.current,
        "qTFEecCyB-y1q2pa5",
      );

      alert("Message sent & saved!");
      formRef.current.reset();
    } catch (error) {
      console.log(error);
      alert("Error occurred");
    }
  };

  // const sendMail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_6u7fsdl",
  //       "template_75xwf35",
  //       formRef.current,
  //       "qTFEecCyB-y1q2pa5",
  //     )
  //     .then(
  //       () => {
  //         alert("Email Sent!!");
  //         formRef.current.reset();
  //       },
  //       (error) => {
  //         alert("Failed to send email");
  //         console.log(error);
  //       },
  //     );
  // };

  return (
    <section className="contact py-12 bg-[#f3f3f3]" id="contactSection">
      {/* Heading */}
      <div className="container mx-auto text-center">
        <small className="text-[#6f34fe] text-xl font-semibold">
          Get in Touch
        </small>
        <h3 className="text-[#3f396d] font-bold text-3xl md:text-4xl mt-2">
          Any Questions? Feel Free to Contact
        </h3>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-evenly mt-8">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 px-6">
          <div className="contact-content text-center mb-8">
            <h2 className="text-[#3f396d] text-2xl font-bold">
              If you like what you see, let's connect.
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-1">
              <i className="bi bi-telephone-fill text-gray-500 text-2xl"></i>
            </div>
            <div className="col-span-11">
              <p className="text-xl">
                <a
                  href="tel:+917972442059"
                  className=" hover:underline font-medium"
                >
                  +91 7972442059
                </a>
              </p>
            </div>

            <div className="col-span-1">
              <i className="bi bi-send-fill text-gray-500 text-2xl"></i>
            </div>
            <div className="col-span-11">
              <p className="text-xl">
                <a
                  href="mailto:prashikgote123@gmail.com"
                  className=" hover:underline font-medium"
                >
                  prashikgote123@gmail.com
                </a>
              </p>
            </div>

            <div className="col-span-1">
              <i className="bi bi-globe-americas text-gray-500 text-2xl"></i>
            </div>
            <div className="col-span-11">
              <p className="text-xl">
                <a
                  href="https://github.com/Prashik-Gote"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/Prashik-Gote
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="w-full md:w-1/2 px-6 mt-8 md:mt-0">
          <form ref={formRef} onSubmit={sendMail} className="contact-form">
            <input
              type="text"
              name="name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#fca61f] bg-white"
              placeholder="Name"
              required
            />

            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#fca61f] mt-4 bg-white"
              placeholder="E-mail"
              required
            />

            <input
              type="text"
              name="contact"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#fca61f] mt-4 bg-white"
              placeholder="Mobile No."
            />

            <textarea
              name="message"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#fca61f] mt-4 bg-white"
              placeholder="Message"
              rows="5"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-[#fca61f] text-white py-3 px-6 rounded-full mt-6 hover:bg-[#6f34fe] transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
