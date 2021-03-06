import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./EmailForm.css";

class EmailForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    emailStatus: "",
  };

  // handle the value
  handleCHange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  // when submit btn is clicked
  submitForm = (e) => {
    const { name, email, subject, message } = this.state;

    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.addEventListener("load", () => {
      // update the response state and the step

      this.setState({
        emailStatus: xhr.responseText,
      });
    });

    // open the request with the verb and the url
    xhr.open(
      "GET",
      "https://react-php-mailer.000webhostapp.com/mailer/demo_mailer.php?sendto=" +
        email +
        "&name=" +
        name +
        "&subject=" +
        subject +
        "&message=" +
        message
    );
    // send the request
    xhr.send();

    // reset the fields
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    e.preventDefault();
  };

  render() {
    const today = new Date();
    const { name, email, subject, message, emailStatus } = this.state;
    return (
      <div className="app_emailForm">
        <div className="ribbon">
          <h4>Beta</h4>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 p-2 box left pl-4 pr-4">
              <div className="column">
                <div className="login-header mt-3">
                  <span>fd</span>
                  <span>Kode</span>
                </div>
                <div className="login-sub-header mt-3">
                  <a href="javascript:void(0)" rel="noopener noreferrer">
                    <h2>Sign up for fdKode</h2>
                  </a>
                  <small className="text-muted">Completely charge free.</small>
                </div>

                <div className="form mt-5">
                  <p className="lead error">
                    {emailStatus ? (
                      <div className="alert alert-info" role="alert">
                        {emailStatus}
                      </div>
                    ) : (
                      "Have something to say? Let us know!"
                    )}
                  </p>
                  <form
                    id="contactForm"
                    name="contactForm"
                    onSubmit={this.submitForm}
                    autoComplete="off"
                  >
                    <label htmlFor="contactEmail">Email</label>
                    <div className="input-group form-group">
                      <input
                        autoComplete="off"
                        type="email"
                        value={email}
                        id="contactEmail"
                        type="mail"
                        id="contactEmail"
                        defaultValue=""
                        name="contactEmail"
                        onChange={this.handleCHange("email")}
                        className="form-control"
                        placeholder="Enter Email"
                      />
                    </div>
                    <label htmlFor="contactName">Name</label>
                    <div className="input-group form-group">
                      <input
                        autoComplete="off"
                        type="text"
                        name="contactName"
                        onChange={this.handleCHange("name")}
                        className="form-control"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <label htmlFor="contactSubject">Subject</label>
                    <div className="input-group form-group">
                      <input
                        autoComplete="off"
                        type="text"
                        value={subject}
                        id="contactSubject"
                        name="contactSubject"
                        onChange={this.handleCHange("subject")}
                        className="form-control"
                        placeholder="Enter Subject"
                      />
                    </div>
                    <label htmlFor="contactMessage">Message</label>
                    <div className="input-group form-group">
                      <textarea
                        className="form-control"
                        value={message}
                        onChange={this.handleCHange("message")}
                        id="contactMessage"
                        name="contactMessage"
                      ></textarea>
                    </div>

                    <div className="form-group mt-5">
                      <input
                        type="submit"
                        value="Submit"
                        className="btn btn-primary btn-lg btn-block login-btn"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-8 p-2 box right">
              <div className="column">
                <div className="title">
                  <p>Send Email Message In React JS With PHP Mailer</p>
                </div>
                <div className="contents">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit sint harum doloribus et fugiat consequatur
                    ipsam asperiores unde molestiae distinctio! Vitae rem
                    dignissimos culpa aperiam inventore tenetur illum dicta
                    amet?
                  </p>
                </div>

                <div className="media">
                  <video width="100%" height="100%" loop="true" autoplay="autoplay" muted>
                    <source src="video/rect-php email.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="footer">
                  <div className="blocks-3">
                    <div className="block-1">
                      <a
                        href="javascript:void(0)"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="text-muted">Terms Of Services</div>
                      </a>
                    </div>
                    <div className="block-2">
                      <a
                        href="javascript:void(0)"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="text-muted">Feedback</div>
                      </a>
                    </div>
                    <div className="block-3">
                      <a
                        href="javascript:void(0)"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="text-muted">
                          Copyright &nbsp;&copy;&nbsp;
                          {today.getFullYear()} &nbsp; fdKode &nbsp;| Created by
                          &#10084; Felix Diaz III
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmailForm;
