import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(router.pathname);
    }
  }, [router.pathname]);

  return (
    <div className="navbar">
      <Link href="/" passHref>
        <a>
          <Image src="/assets/logo.png" alt="Logo" width={50} height={50} />
        </a>
      </Link>
      <Link href="/tutorials" passHref>
        <a className={currentPath === "/tutorials" ? "active" : ""}>İçerikler</a>
      </Link>
      <button
        className="donate-button"
        onClick={() => window.open("https://banabicoffee.com/@berk", "_blank")}
      >
        Bana Kahve Ismarlayın
      </button>
    </div>
  );
};

const ResumeForm = () => {
  const [iframeStyle, setIframeStyle] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIframeStyle(window.innerWidth <= 600 ? { width: "28rem", height: "430px" } : { width: "40rem", height: "500px" });
    }
  }, []);

  return (
    <div className="iframe-wrapper">
      <iframe
        src="https://90481891.sibforms.com/serve/MUIFAA3TtJfbrF304IdRf1P8gDCZsH70jSNTjR1SghJ67VIC2AsWCCpYEe0yBeozjRB0bBFhlsu0V5VfrKhBxAJxSSuFa6YVqroJEvT72R7ittcIK-8uoRPoLl3_iisBxoWINtQSgvp8pIO0XSRCu9zaNAipT2R0BcLEYgoo_el8pYyDPCMjcCzAZK1UbIvGbt4diHTLzK8e74Kn"
        scrolling="no"
        allowFullScreen
        style={iframeStyle}
      ></iframe>
    </div>
  );
};

const ResumePage = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="hero-section">
          <ResumeForm />
          <Image src="/assets/resume.png" alt="Resume" width={400} height={400} />
        </div>
      </div>

      {/* ✅ CSS Kodu Doğrudan Burada */}
      <style jsx>{`
        /* Genel Stil */
        body {
          background-color: #f5f5f5;
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }

        /* Navbar */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 1rem 2rem;
          background-color: #333;
        }

        .navbar a {
          text-decoration: none;
          margin: 0 1rem;
          color: white;
          font-size: 1.2rem;
        }

        .navbar .active {
          color: #9d7af7;
        }

        .donate-button {
          background-color: #9d7af7;
          color: white;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        /* İçerik Alanı */
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          min-height: 100vh;
          box-sizing: border-box;
          padding: 3rem;
          overflow: hidden;
        }

        /* Hero Bölümü */
        .hero-section {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: row;
          margin-top: 5rem;
        }

        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
          }
        }

        /* iFrame */
        .iframe-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          width: 40rem;
          max-width: 600px;
          height: 500px;
          margin-right: 2rem;
        }

        @media (max-width: 600px) {
          .iframe-wrapper {
            width: 28rem;
            height: 430px;
          }
        }
      `}</style>
    </>
  );
};

export default ResumePage;
