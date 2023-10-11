import React from "react";
import { Facebook, Github, Google, Instagram, Linkedin, Twitter } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-white position-absolute w-100"
        style={{ backgroundColor: "#1b273a" }}
      >
        <div className="container">
          <section className="mt-4">
            <div className="row text-center d-flex justify-content-center pt-5">
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#navbar-id" className="text-white">
                    Home
                  </a>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/faq" className="text-white">
                    FAQ
                  </Link>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/t&c" className="text-white">
                    Terms
                  </Link>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/contact" className="text-white">
                    Contact
                  </Link>
                </h6>
              </div>
            </div>
          </section>

          <hr className="my-5" />

          <section className="mb-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p className="">
                Stay connected, stay organized, and keep dialing with our phone book app. Your contacts, your world, simplified and at your fingertips. Dial into the future of contact management!
                </p>
              </div>
            </div>
          </section>

          <section className="text-center mb-5">
            <a href="https://github.com/Gokul-nath-K" className="text-white me-4">
              <Facebook/>
            </a>
            <a href="https://github.com/Gokul-nath-K" className="text-white me-4">
              <Twitter/>
            </a>
            <a href="https://github.com/Gokul-nath-K" className="text-white me-4">
              <Google/>
            </a>
            <a href="https://github.com/Gokul-nath-K" className="text-white me-4">
              <Instagram/>
            </a>
            <a href="https://github.com/Gokul-nath-K" className="text-white me-4">
              <Linkedin/>
            </a>
            <a href="https://github.com/Gokul-nath-K" className="text-white me-4">
              <Github/>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:{" "}
          <a className="text-white" href="http://localhost:3000/">
            PhonePro.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
