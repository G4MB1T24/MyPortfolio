import React, { Component } from "react";
import gitlogo from "./assets/github.svg";
import PropTypes from 'prop-types'
import { Link } from "react-scroll"


export default class Navbar extends Component {
    static defaultProps = {
        github: "https://github.com",
    }    
    
    static propTypes = {
        github: PropTypes.string,
  }    
    render() {
    return (
      <>
        <header className="text-gray-400 bg-gray-900 body-font">
          <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
            <a
              href="/"
              className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Gambit</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <Link to="project-s" spy={true} smooth={true} offset={500} duration={400}  id="project-s" className="mr-5 hover:text-white hover:border-b-2 border-white">
                Projects
              </Link>
              <a href="/" className="mr-5 hover:text-white hover:border-b-2 border-white">
                Links
              </a>
              <a href="/" className="mr-5 hover:text-white hover:border-b-2 border-white">
                Third Link
              </a>
              <a href="/" className="mr-5 hover:text-white hover:border-b-2 border-white">
                Fourth Link
              </a>
            </nav>

                <a href={this.props.github}><img src={gitlogo} alt="" /></a>

          </div>
        </header>
      <script src="/components/scroller.js"></script>
      </>
    );
  }
}
