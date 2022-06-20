import React, { Component } from "react";
import PropTypes from "prop-types";
import LoweProjects from "./LoweProjects";
import proj1img from "./assets/proj1.png";
import proj2img from "./assets/proj2.png";


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
        <section class="Proj1 text-gray-400 bg-gray-900 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={proj1img}
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Weather App,

              </h1>
              <p class="mb-8 leading-relaxed">
                A Fast and Simple Weather App built using Django (Backend),
                <br />
                Bootstrap (Frontend) OpenWeather (Api and Data), Hosted on
                Heroku,
              </p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  <a
                    href={this.props.proj1site}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Site
                  </a>
                </button>
                <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
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

        <section class=" Proj2 text-gray-400 bg-gray-900 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Dating/Matrimonial Site
              </h1>
              <p class="mb-8 leading-relaxed">
                A Dating/Matrimonial WebSite built using Django (Backend),
                <br />
                Bootstrap (Frontend) , Hosted on Heroku,
                <h2 className="text-2xl ">Work In Progress.</h2>
              </p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <a href={this.props.proj2site} target="_blank" rel="noreferrer">Visit Site</a>
                  
                </button>
                <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  <a href={this.props.proj2gitrepo} target="_blank" rel="noreferrer">Github</a>
                </button>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={proj2img}
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
