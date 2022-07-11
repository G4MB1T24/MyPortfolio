import React, { Component } from "react";
import PropTypes from "prop-types";
import LoweProjects from "./LoweProjects";
import proj1img from "./assets/project.png";



export default class Myprojects extends Component {
  static propsTypes = {
    proj1gitrepo: PropTypes.string,
    proj1site: PropTypes.string,
    proj2gitrepo: PropTypes.string,
    proj2site: PropTypes.string,
  };
  static defaultProps = {
    proj1gitrepo: "/",
    proj1site: "/",
    proj2gitrepo: "/",
    proj2site: "/",
  };
  render() {
    return (
      <>
        <section id="project-s" className="Proj1 text-gray-400 bg-gray-900 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={proj1img}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Weather App,

              </h1>
              <p className="mb-8 leading-relaxed">
                A Fast and Simple Weather App built using Django (Backend),
                <br />
                Bootstrap (Frontend) OpenWeather (Api and Data), Hosted on
                Heroku,
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg duration-200">
                  <a
                    href={this.props.proj1site}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Site
                  </a>
                </button>
                <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg duration-200">
                  <a
                    href={this.props.proj1gitrepo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className=" Proj2 text-gray-400 bg-gray-800 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Dating/Matrimonial Site
              </h1>
              <p className="mb-8 leading-relaxed">
                A Dating/Matrimonial WebSite built using Django (Backend),
                <br />
                Bootstrap (Frontend) , Hosted on Heroku,
                <h2 classNameName="text-2xl ">Work In Progress.</h2>
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg duration-200">
                <a href={this.props.proj2site} target="_blank" rel="noreferrer">Visit Site</a>
                  
                </button>
                <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg duration-200">
                  <a href={this.props.proj2gitrepo} target="_blank" rel="noreferrer">Github</a>
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={proj1img}
              />
            </div>
          </div>
        </section>
        <div>
                <LoweProjects></LoweProjects>
        </div>

      </>
    );
  }
}
