import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import "../styles/globals.css"; // CSS dosyasını dahil et

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
    <div className="container">
      <Navbar />
      <div className="hero-section">
        <ResumeForm />
        <Image src="/assets/resume.png" alt="Resume" width={400} height={400} />
      </div>
    </div>
  );
};

export default ResumePage;
