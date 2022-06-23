import React from "react";
import Typewriter from "typewriter-effect";
import rat from "./assets/rat.png";
import { Link } from "react-scroll";

export default function Welcome() {
  return (
    <>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={rat}
          />

          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(Typewriter) => {
                  Typewriter.changeDelay(50)
                    .changeDeleteSpeed(100)
                    .typeString("Greetings!")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("I'm Gambit. ")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Welcome to my Page.")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Checkout My Projects.")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Checkout My Connections.")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Thank you for visiting my page.")
                    .pauseFor(1000)
                    .start();
                }}
              ></Typewriter>
            </h1>
            <p class="leading-relaxed mb-8 my-2 py-2">
              <button class="my-3 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <Link
                  to="aboutme"
                  spy={true}
                  smooth={true}
                  duration={500}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read more.
                </Link>
              </button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
