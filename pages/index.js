import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Home = ({ posts }) => (
  <div className="container">
    <Head>
      <title>Jazz for Cows - A blog by Berk</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
      />
    </Head>

    <div className="hero">
      <div>
        <Link href="/" style={{ textDecoration: "none" }}>
          <h1 className="hero-title">Jazz for Cows</h1>
        </Link>
        <div className="hero-container">
          <h4 className="hero-subtitle">by Oral Berk Arslan</h4>

          <div className="profile-picture">
            <a href="/aboutme">
              <img src="/assets/obapic.jpg" alt="Profil Resmi" />
            </a>
          </div>
        </div>
      </div>
    </div>

    {posts.map((post) => (
      <div className="blog">
        <h2 className="blog-title">
          <a className="blog-title-link" href={post.slug}>
            <h1>{post.title}</h1>
          </a>
        </h2>
        <div className="blog-text">
          <ReactMarkdown source={post.subtitle} />
        </div>
        <div className="blog-date">{post.date}</div>
      </div>
    ))}
    <hr></hr>
    <a href="/aboutme">
      <footer className="hero-footer">Contact</footer>
      
    </a>
    <div className="pic-container">
    <img src="/assets/jazzforcows.png" alt="Foto" className="pic" />
    </div>


    <style jsx>{`
      :global(body) {
        background-color: #292c34;
        text-decoration: none;
      }

      .container {
        max-width: 700px;
        width: 100%;
        margin: 0 auto;
        text-decoration: none;
      }

      .hero {
        text-align: center;
        margin: 50px 0;
      }

      .social-link {
        margin-right: 8px;
      }

      .hero-title {
        font-size: 48px;
        color: #e5e5e6;
      }
      .hero-subtitle {
        font-size: 22px;
        color: #e5e5e6;
      }

      .blog-date {
        text-align: right;
        color: #e5e5e6;
        margin: 12px 0 48px 0;
        text-decoration: none;
        font-family: "Montserrat", sans-serif;
      }
      .blog-title-link {
        font-size: 15px;
        text-decoration: none;
        text-decoration: none;
        font-family: "Montserrat", sans-serif;
        color: #ffb3d8;
        font-weight: 900;
      }

      .blog-text {
        color: #e5e5e6;
        font-family: "Montserrat", sans-serif;
      }

      a {
        color: #35459e;
        text-decoration: none;
      }

      h1 {
        text-decoration: none;
      }
      .profile-picture {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        margin: 10px;
      }

      .profile-picture img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Resmi tamamen kapsayacak şekilde boyutlandırır */
      }

      .hero-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .blog:hover {
        transform: scale(1.05); /* Üzerine gelindiğinde boyutunu artırma */
      }
      .blog {
        transition: transform 0.2s ease-in-out; /* Transformun geçiş süresi ve eğrisi */
      }
      .hero-footer {
        display: flex;
        font-family: "Montserrat", sans-serif;
        justify-content: center;
        color: #ffb3d8;
        margin: 9px;
        font-size: 20px;
      }
      .pic-container{
        text-align:center;
      
      }
      .pic{
        width:60%; 
       
      }
    `}</style>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("https://jazz-for-cows.vercel.app//api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
