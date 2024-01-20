import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import marked from "marked"; // marked kütüphanesini ekledik

const BlogPost = ({ post }) => {
  // Markdown metni HTML'e çevriliyor
  const convertMarkdownToHTML = (markdown) => {
    return { __html: marked(markdown) };
  };

  return (
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
          <a href="/" style={{ textDecoration: "none" }}>
            <h1 className="hero-title">Jazz for Cows</h1>
          </a>

          <div className="hero-container">
            <h4 className="hero-subtitle">by Oral Berk Arslan</h4>

            <div className="profile-picture">
              <img src="/assets/obapic.jpg" alt="Profil Resmi" />
            </div>
          </div>
        </div>
      </div>
      <div className="blog">
        <h1 className="blog-title-link">{post.title}</h1>
        <div className="blog-date">{post.date}</div>
        {/* Markdown metni HTML'e çevriliyor */}
        <div
          className="blog-text"
          dangerouslySetInnerHTML={convertMarkdownToHTML(post.details)}
        />
      </div>
      <style jsx>{`
        // Stil kodları buraya eklenmiş
      `}</style>
    </div>
  );
};

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(
    `https://jazz-for-cows-berkarslanns-projects.vercel.app/api/post/${query.postId}`
  );
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
