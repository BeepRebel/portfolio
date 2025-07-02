import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import AOS from "aos";
import "aos/dist/aos.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? process.env.PUBLIC_URL + "/res_primaryLanguage.json"
        : process.env.PUBLIC_URL + "/res_secondaryLanguage.json";

    this.loadResumeFromPath(resumePath);
  }

  swapCurrentlyActiveLanguage(oppositeLangIconId) {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(oppositeLangIconId)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(pickedLangIconId)
      .setAttribute("filter", "brightness(40%)");
  }

  componentDidMount() {
    this.loadSharedData();
    AOS.init({ duration: 1000, once: true });
    this.loadResumeFromPath(process.env.PUBLIC_URL + "/res_primaryLanguage.json");
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: process.env.PUBLIC_URL + "/portfolio_shared_data.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${data.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <div>
        <Navbar />

        <div data-aos="fade-up">
          <Header sharedData={this.state.sharedData.basic_info} />
        </div>

        <div data-aos="fade-down">
          <About
            resumeBasicInfo={this.state.resumeData.basic_info}
            sharedBasicInfo={this.state.sharedData.basic_info}
          />
        </div>

        <div data-aos="zoom-in">
          <Projects
            resumeProjects={this.state.resumeData.projects}
            resumeBasicInfo={this.state.resumeData.basic_info}
          />
        </div>

        <div data-aos="flip-up">
          <Skills
            sharedSkills={this.state.sharedData.skills}
            resumeBasicInfo={this.state.resumeData.basic_info}
          />
        </div>

        <div data-aos="fade-right">
          <Experience
            resumeExperience={this.state.resumeData.experience}
            resumeBasicInfo={this.state.resumeData.basic_info}
          />
        </div>

        <div data-aos="zoom-out">
          <Contact />
        </div>

        <div data-aos="fade-up">
          <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
        </div>
      </div>
    );
  }
}

export default App;
