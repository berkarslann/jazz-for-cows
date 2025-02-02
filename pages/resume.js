import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import resume from '../public/assets/resume.png';
import logo from '../public/assets/logo.png';
import Link from "next/link";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
    width: "100%",
    minHeight: "100vh",
    boxSizing: "border-box",
    padding: "3rem",
    overflow: "hidden",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "1rem 2rem",
    backgroundColor: "#333",
  },
  img: {
    height: "50px",
  },
  link: {
    textDecoration: "none",
    margin: "0 1rem",
    color: "white",
    fontSize: "1.2rem",
  },
  activeLink: {
    color: "#9d7af7",
  },
  button: {
    backgroundColor: "#9d7af7",
    color: "white",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  heroSection: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "5rem",
  },
  resumeImg: {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    display: "block",
    margin: "0 auto",
  },
  iframeWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "40rem",
    maxWidth: "600px",
    height: "500px",
    marginRight: "2rem",
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: "0",
    overflow: "hidden",
  },
  mobileIframe: {
    width: "28rem",
    height: "430px",
  }
};

// ✅ `useRouter` sadece istemci tarafında çalışacak şekilde düzeltildi
const Navbar = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(router.pathname);
    }
  }, [router.pathname]);

  return (
    <div style={styles.navbar}>
      <Link href="/" style={{ textDecoration: "none" }}>
        <img src={logo} alt="Logo" style={styles.img} />
      </Link>
      <Link
        href="/tutorials"
        style={{
          ...styles.link,
          ...(currentPath === "/tutorials" ? styles.activeLink : {}),
        }}
      >
        İçerikler
      </Link>
      <button
        style={styles.button}
        onClick={() => window.open("https://banabicoffee.com/@berk", "_blank")}
      >
        Bana Kahve Ismarlayın
      </button>
    </div>
  );
};

// ✅ `window` kullanımı sadece istemci tarafında çalışacak şekilde düzeltildi
const ResumeForm = () => {
  const [iframeStyle, setIframeStyle] = useState(styles.iframe);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIframeStyle(window.innerWidth <= 600 ? styles.mobileIframe : styles.iframe);
    }
  }, []);

  return (
    <div style={styles.iframeWrapper}>
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
    <div style={styles.container}>
      <Navbar />
      <div style={styles.heroSection}>
        <ResumeForm />
        <img style={styles.resumeImg} src={resume} alt="Resume" />
      </div>
    </div>
  );
};

export default ResumePage;
