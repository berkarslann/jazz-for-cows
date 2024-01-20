import React from "react";
import Head from "next/head";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="container">
      <Head>
        <title>oral berk arslan</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        />
      </Head>

      <h1>oral berk arslan</h1>
      <ul>
        <li>
          <a href="https://github.com/berkarslann" target="_blank">github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/oral-berk-arslan-3a01331b9/" target="_blank">linkedin</a>
        </li>
        <li>
          <a href="https://www.youtube.com/@berkkarslan" target="_blank">youtube</a>
        </li>
        <li>
          <a href="https://www.instagram.com/berk.arsln/" target="_blank">instagram</a>
        </li>
      </ul>
      
    </div>
  );
};

export default AboutMe;
