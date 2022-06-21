import React, { Component } from "react";
import instagram from "./assets/icons/Instagram-Logo.wine.svg";
import github from "./assets/icons/GitHub-Logo.wine.svg";
import reddit from "./assets/icons/Reddit-Logo.wine.svg"
import spotify from "./assets/icons/Spotify-Logo.wine.svg"
import youtube from "./assets/icons/YouTube-Icon-Full-Color-Logo.wine.svg"
import devto from "./assets/icons/dev-to-svgrepo-com.svg"
export default class Links extends Component {
  render() {
    return (
      <>
        <div className="  min-h-screen text-gray-400 bg-gray-900 body-font">

        <section class="text-gray-400 bg-gray-900 body-font ">
          <div class="container px-5 py-24 mx-auto ">
            <div class="flex flex-col text-center w-full mb-20 ">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white ">
                My connections
              </h1>
            </div>
            <div class="flex flex-wrap -m-2 ">
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg hover:scale-105 hover:bg-gray-700 ease-in duration-300">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={instagram}
                  />
                  <div class="flex-grow">
                    <h2 class="text-white title-font font-medium"><a  target="_blank" rel="noreferrer"href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> Instagram</a></h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg hover:scale-105  hover:bg-gray-700 ease-in duration-300">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={github}
                  />
                  <div class="flex-grow">
                    <h2 class="text-white title-font font-medium">
                      <a  target="_blank" rel="noreferrer"href="https://github.com/G4MB1T24"> Github</a>
                    </h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg hover:scale-105 hover:bg-gray-700 ease-in duration-300">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={reddit}
                  />
                  <div class="flex-grow">
                    <h2 class="text-white title-font font-medium">
                      <a target="_blank" rel="noreferrer" href="https://www.reddit.com/user/Gambit2422">
                        {" "}
                        Reddit
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg hover:scale-105 hover:bg-gray-700 ease-in duration-300">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={devto}
                  />
                  <div class="flex-grow">
                    <h2 class="text-white title-font font-medium">
                      <a target="_blank" rel="noreferrer" href="https://dev.to/g4mb1t24 "> Dev.To</a>
                    </h2>
                    {/* */}
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg hover:scale-105 hover:bg-gray-700 ease-in duration-300">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={spotify}
                  />
                  <div class="flex-grow">
                    <h2 class="text-white title-font font-medium">
                      <a target="_blank" rel="noreferrer" href="https://open.spotify.com/user/31lxog346dowy22atgvour7666ya">
                        Spotify
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full ">
                <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg hover:scale-105 hover:bg-gray-700 ease-in duration-300 ">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={youtube}
                  />
                  <div class="flex-grow">
                    <h2 class="text-white title-font font-medium">
                      <a  target="_blank" rel="noreferrer"href="https://www.youtube.com/channel/UCk4Ngwlv7ZztPFmfwTvjNKA">
                        YouTube
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>

        </div>
      </>
    );
  }
}
