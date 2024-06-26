import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
// import ReactMarkdown from "react-markdown";
const convertMarkdownToHTML = (markdown) => {

  const lines = markdown.split('\n');

  const htmlContent = lines.map(line => {

    line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    line = line.replace(/__(.*?)__/g, '<strong>$1</strong>');
    
    line = line.replace(/\*(.*?)\*/g, '<em>$1</em>');
    line = line.replace(/_(.*?)_/g, '<em>$1</em>');

    const matchImage = line.match(/!\[image\]\((.*?)\)/);
    if (matchImage) {
      const imageUrl = matchImage[1];
      return `<img src="${imageUrl}" alt="Image" style="width: 25rem; "/>`;
    }

    return `<p>${line}</p>`;
  }).join('');

  return { __html: htmlContent };
};




const BlogPost = ({ post }) => (
  //blog post
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
      {/* <div className="blog-text" dangerouslySetInnerHTML={{ __html: marked(post.details) }} /> */}
      <div className="blog-text" dangerouslySetInnerHTML={convertMarkdownToHTML(post.details)} />
      
      {/* <div className="blog-text">{post.details}</div> */}
    </div>
    <style jsx>{`
      :global(body) {
        background-color: #292c34;
        text-decoration: none;
      }

      .container {
        max-width: 650px;
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
        color: #ffb3d8;
      }
      .hero-subtitle {
        font-size: 24px;
        color: #e5e5e6;
      }

      .blog-date {
        text-align: right;
        color: #e5e5e6;
        margin: 12px 0 48px 0;
        text-decoration: none;
        font-size: 15px;
        font-family: "Montserrat", sans-serif;
      }
      .blog-title-link {
        font-size: 35px;
        text-decoration: none;
        color: #e5e5e6;
        text-decoration: none;
        font-family: "Montserrat", sans-serif;
      }

      .blog-text {
        color: #e5e5e6;
        font-family: "Montserrat", sans-serif;
        line-height: 1.7;
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
      @media only screen and (max-width: 600px) {
        .hero-title {
          font-size: 36px;
        }
      
        .hero-subtitle {
          font-size: 18px;
        }
     
        .blog-title-link {
          font-size: 28px;
        }
      }
      .container{
        margin: 0 auto;
        padding:1rem;
        width: 100%;
      }
    `}</style>
    
  </div>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(
    `https://jazz-for-cows-aec9c4ffb37b.herokuapp.com/api/post/${query.postId}`
  );
  const json = await res.json();
  return { post: json.post };
};
// BlogPost.getInitialProps = async ({ req, query }) => {
//   // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
//   const res = await fetch(
//     `http://localhost:3000/api/post/${query.postId}`
//   );
//   const json = await res.json();
//   return { post: json.post };
// };

export default BlogPost;
