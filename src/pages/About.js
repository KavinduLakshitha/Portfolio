import React from "react";
import { Link } from "react-scroll";
import "./About.css";

function About() {
  return (
    <div className="about" style={{ height: 500 }}>
      <div className="container">
        <div className="row g-0">
          <div className="col-md-6 g-0">
            <div className="left d-flex justify-content-center">
              <img
                className="about__img"
                src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1660485444/Web-portfolio/portfolio_gedhgy.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 g-0">
            <div className="right d-flex justify-content-center align-items-space-between">
              <div className="about__desc">
                <span className="about__badge">WHO AM I?</span>
                <br />
                <br />
                <h1 className="aboutme__Title">I'm Kavindu Marasinghe</h1>
                <div className="aboutme__desc">
                  👨‍💻I am a 3rd-year undergraduate at SLIIT, doing a
                  specialization in BSc(hons) in Information Technology. I've
                  done a few ReactJS-based projects alone and as group projects
                  at the uni. I'm trying to learn new technologies such as
                  NextJs, Tailwind CSS and Web 3.0 development. <br />
                  <br />
                  When I am not coding or studying, I'd like to introduce my
                  self as an artist. I mostly do portrait arts as my hobby as
                  well as a freelancer.
                </div>
                <br />
                <br />
                <span className="about__Choices">
                  My preffered weapons of choice👇
                </span>
                <br />
                <ul class="list-group">
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;HTML / CSS / Js
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;ReactJs / NextJS
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;Bootstrap/Material UI
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;Firebase
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;MongoDB
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <a
        className="btn btn-info"
        href="https://github.com/KavinduLakshitha/"
        class="btn btn-info"
        role="button"
        target="_blank"
        rel="noreferrer"
        style={{position:"relative" ,top:"50px", marginBottom: "5px", backgroundColor: "#111827" }}
      >
        Download My CV
      </a> */}

      <Link to="home">
        <div className="gototop__button">
          <i class="bi bi-chevron-double-up"></i>
        </div>
      </Link>

      <hr
        style={{
          color: "white",
          width: "70%",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "20px",
        }}
      />
      <div
        className="icons"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="row g-0"
          style={{
            padding: "20px",
            marginTop:"0",
            boxShadow: "none",
          }}
        >
          <div className="col">
            <div className="sm__links d-flex justify-content-center">
              <a
                className="socialmedia_icon"
                href="https://www.facebook.com/kavindulakshitha123"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-facebook-f"></i>
              </a>

              <a
                className="socialmedia_icon"
                href="https://www.instagram.com/_kavindu.laskshitha_/"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                className="socialmedia_icon"
                href="https://www.twitter.com/kavindulm98"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                className="socialmedia_icon"
                href="https://www.linkedin.com/in/kavindu-marasinghe/"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                className="socialmedia_icon"
                href="https://github.com/KavinduLakshitha"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                className="socialmedia_icon"
                href="mailto:kavindu.m.online@gmail.com"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr
        style={{
          color: "white",
          width: "70%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
        }}
      />
    </div>
  );
}

export default About;
