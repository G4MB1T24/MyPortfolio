import React, { Component } from "react";
import herokuLogo from "./assets/ToolStackIcons/heroku.png";
import vscLogo from "./assets/ToolStackIcons/vsc.png";
import gitLogo from "./assets/ToolStackIcons/git.png";
import awsLogo from "./assets/ToolStackIcons/aws.png";
import ngrokLogo from "./assets/ToolStackIcons/ngrok.png";
export default class Toolstack extends Component {
  render() {
    return (
      <>
        <section class="text-gray-400 body-font bg-gray-900">
          <div class=" container px-5 py-24 mx-auto">
            <div class=" flex flex-wrap w-full mb-0 -my-2">
              <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                  My Tool Stack
                </h1>
                <div class="h-1 w-48 bg-indigo-500 rounded"></div>
              </div>
            </div>

            <div class="flex flex-wrap -m-4 my-4">
              <div class="xl:w-1/4 md:w-1/2 p-4 ">
                <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg transition ease-in-out hover:scale-110 hover:bg-gray-800 duration-300">
                  <img
                    class="h-20 rounded w-full object-cover object-center mb-6"
                    src={vscLogo}
                    alt="content"
                  />
                  <h3 class="flex justify-center text-lg text-white font-medium title-font mb-4">
                    VisualStudio Code
                  </h3>
                </div>
              </div>

              <div class="xl:w-1/4 md:w-1/2 p-4 ">
                <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg transition ease-in-out hover:scale-110 hover:bg-gray-800 duration-300">
                  <img
                    class="h-20 rounded w-full object-cover object-center mb-6"
                    src={gitLogo}
                    alt="content"
                  />
                  <h3 class="flex justify-center text-lg text-white font-medium title-font mb-4">
                    .git
                  </h3>
                </div>
              </div>

              <div class="xl:w-1/4 md:w-1/2 p-4 ">
                <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg transition ease-in-out hover:scale-110 hover:bg-gray-800 duration-300">
                  <img
                    class="h-20 rounded w-full object-cover object-center mb-6"
                    src={awsLogo}
                    alt="content"
                  />
                  <h3 class="flex justify-center text-lg text-white font-medium title-font mb-4">
                    AWS S3
                  </h3>
                </div>
              </div>

              <div class="xl:w-1/4 md:w-1/2 p-4 ">
                <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg transition ease-in-out hover:scale-110 hover:bg-gray-800 duration-300">
                  <img
                    class="h-20 rounded w-full object-cover object-center mb-6"
                    src={herokuLogo}
                    alt="content"
                  />
                  <h3 class="flex justify-center text-lg text-white font-medium title-font mb-4">
                    Heroku
                  </h3>
                </div>
              </div>
            </div>
              <div className="flex flex-row justify-center">
                <div class=" xl:w-1/4 md:w-1/2 p-4 ">
                  <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg transition ease-in-out hover:scale-110 hover:bg-blue-400 duration-300">
                    <img
                      class="h-20 rounded w-full object-cover object-center mb-6"
                      src={ngrokLogo}
                      alt="content"
                    />
                    <h3 class="flex justify-center text-lg text-white font-medium title-font mb-4">
                      Ngrok
                    </h3>
                  </div>
                </div>
              </div>
          </div>
        </section>
      </>
    );
  }
}
