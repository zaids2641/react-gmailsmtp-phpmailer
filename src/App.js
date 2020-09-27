import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import EmailForm from "./EmailForm";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Send Email Message In React JS With PHP Mailer</title>
        <link rel="canonical" href="" />

        <meta
          name="description"
          itemprop="description"
          content="This is my React JavaScript project, it is my clone of pxCode. I am showing my simple implementation of sending Email message in React JS with PHPmailer."
        />
        <meta
          name="keywords"
          itemprop="keywords"
          content="email, react, javascript, php, mail, mailer, phpmailer, php mailer, react mailer"
        />
        <meta name="author" itemprop="author" content="Felix Diaz III" />
        <meta
          name="title"
          itemprop="title"
          content="Send Email Message In React JS With PHP Mailer"
        />
        <meta
          name="url"
          itemprop="url"
          id="meta-location"
          content="https://felixdiaz.netlify.app/"
        />
        <meta property="video" content="video/Pexels_Videos_2278095.mp4" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://felixdiaz.netlify.app/" />
        <meta
          property="og:title"
          content="Send Email Message In React JS With PHP Mailer"
        />
        <meta
          property="og:description"
          content="This is my React JavaScript project, it is my clone of pxCode. I am showing my simple implementation of sending Email message in React JS with PHPmailer."
        />
        <meta property="og:image" content="" />
        <meta property="og:video" content="video/Pexels_Videos_2278095.mp4" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://felixdiaz.netlify.app/" />
        <meta
          property="twitter:title"
          content="Send Email Message In React JS With PHP Mailer"
        />
        <meta
          property="twitter:description"
          content="This is my React JavaScript project, it is my clone of pxCode. I am showing my simple implementation of sending Email message in React JS with PHPmailer."
        />
        <meta property="twitter:image" content="" />
        <meta
          property="twitter:video"
          content="video/Pexels_Videos_2278095.mp4"
        />
      </Helmet>
      <EmailForm />
    </div>
  );
}

export default App;
