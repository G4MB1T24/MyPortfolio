import React, { Component } from "react";
import pythonLogo from "./assets/TechStackIcons/python.png";
import djangoLogo from "./assets/TechStackIcons/django.png";
import javascriptLogo from "./assets/TechStackIcons/javascript.png";
import reactLogo from "./assets/TechStackIcons/reactjs.png";
import tailwindLogo from "./assets/TechStackIcons/tailwindcss.png";
import bootstrapLogo from "./assets/TechStackIcons/bootstrap.png";
import Toolstack from "./Toolstack";
export default class TechStack extends Component {
  componentDidMount(){
    document.title = "Gambit -TechStack"
  }
  render() {
    return (
      <>
        
        <section class="text-gray-400 body-font bg-gray-900">
          <div class=" container px-5  mx-auto md:py-24">
            <div class=" flex flex-wrap w-full mb-0 -my-2">
              <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                  My Tech Stack
                </h1>
                <div class="h-1 w-48 bg-indigo-500 rounded"></div>
              </div>
            </div>
            <div class="flex flex-wrap -m-4 my-4">
              <div class="xl:w-1/4 md:w-1/2 p-4 ">
                <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg transition ease-in-out hover:scale-110 hover:bg-gray-800 duration-300">
                  <img
                    class="h-24 rounded w-full object-cover object-center mb-6"
                    src={pythonLogo}
                    alt="content"
                  />
                  <h2 class="text-lg text-white font-medium title-font mb-4">
                    Python
                  </h2>
                  <p class="leading-relaxed text-base">
                    Python is a programming language that lets you work more
                    quickly and integrate your systems more effectively.&nbsp;
                    <p>
                      <a
                        className="text-indigo-500"
                        href="https://www.python.org/downloads/"
                      >
                        Learn More..
                      </a>
                    </p>
                  </p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg transition ease-in-out hover:scale-110 hover:bg-gray-800 duration-300">
                  <img
                    class="h-24 rounded w-full object-cover object-center mb-6"
                    src={djangoLogo}
                    alt="content"
                  />
                  <h2 class="text-lg text-white font-medium title-font mb-4">
                    Python Django
                  </h2>
                  <p class="leading-relaxed text-base">
                    Django makes it easier to build better web apps more quickly
                    and with less code.&nbsp;
                    <br />
                    <br />
                    <p>
                      <a
                        className="text-indigo-500"
                        href="https://www.djangoproject.com/"
                      >
                        Learn More..
                      </a>
                    </p>
                  </p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg transition ease-in-out hover:scale-110 hover:bg-gray-800 duration-300">
                  <img
                    class="h-24 rounded w-full object-cover object-center mb-6"
                    src={javascriptLogo}
                    alt="content"
                  />
                  <h2 class="text-lg text-white font-medium title-font mb-4">
                    JavaScript
                  </h2>
                  <p class="leading-relaxed text-base">
                    JavaScript (JS) is a lightweight, interpreted, or
                    just-in-time compiled programming language with first-class
                    functions.
                    <p>
                      <a
                        className="text-indigo-500"
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                      >
                        Learn More..
                      </a>
                    </p>
                  </p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg transition ease-in-out hover:scale-110 hover:bg-gray-800 duration-300">
                  <img
                    class="h-24 rounded w-full object-cover object-center mb-6"
                    src={reactLogo}
                    alt="content"
                  />
                  <h2 class="text-lg text-white font-medium title-font mb-4">
                    React.Js
                  </h2>
                  <p class="leading-relaxed text-base">
                    React has been designed from the start for gradual adoption,
                    and you can use as little or as much React as you need.
                    <p>
                      <a className="text-indigo-500" href="https:reactjs.org">
                        Learn More..
                      </a>
                    </p>
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center">
                <div class="xl:w-1/4 md:w-1/2 p-4">
                  <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg transition ease-in-out hover:scale-110 hover:bg-gray-800 duration-300">
                    <img
                      class="h-24 rounded w-full object-cover object-center mb-6"
                      src={tailwindLogo}
                      alt="content"
                    />
                    <h2 class="text-lg text-white font-medium title-font mb-4">
                      TailwindCSS
                    </h2>
                    <p class="leading-relaxed text-base">
                      A utility-first CSS framework packed with classes like
                      flex, pt-4, text-center and rotate-90 that can be composed
                      to build any design, directly in your markup.
                      <p>
                        <a
                          className="text-indigo-500"
                          href="https://tailwindcss.com/"
                        >
                          Learn More..
                        </a>
                      </p>
                    </p>
                  </div>
                </div>
                <div class="xl:w-1/4 md:w-1/2 p-4">
                  <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg transition ease-in-out hover:scale-110 hover:bg-gray-800 duration-300">
                    <img
                      class="h-24 rounded w-full object-cover object-center mb-6"
                      src={bootstrapLogo}
                      alt="content"
                    />
                    <h2 class="text-lg text-white font-medium title-font mb-4">
                      BootStrap
                    </h2>
                    <p class="leading-relaxed text-base">
                      Powerful, extensible, and feature-packed frontend toolkit.
                      Build and customize with Sass, utilize prebuilt grid
                      system and components
                      <p>
                        <a
                          className="text-indigo-500"
                          href="https://getbootstrap.com/"
                        >
                          Learn More..
                        </a>
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
        <Toolstack></Toolstack>        
          </div>
        </section>
      </>
    );
  }
}
