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
        <meta
          name="description"
          itemprop="description"
          content="This is my React JavaScript project, it is my clone of pxCode. I am showing my simple implementation of sending Email message in React JS with PHPmailer."
        />
      </Helmet>
      <EmailForm />
    </div>
  );
}

export default App;
