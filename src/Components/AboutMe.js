// import PropTypes from 'prop-types'
import React, { Component } from "react";

export default class AboutMe extends Component {
  //   static propTypes = {second: third}

  render() {
    return (
      <>
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Something, 
                <br className="hidden lg:inline-block" />
                About Me
              </h1>
              <p className="mb-8 leading-relaxed">
              Hi, I'm Gambit I code, make things, and mess around with computers, Currently, learning React and front-end development, and I have a good command over Python and Django for the Backend, Yes I peep Stackoverflow :P
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Button
                </button>
                <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  Button
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://dummyimage.com/720x600"
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}
