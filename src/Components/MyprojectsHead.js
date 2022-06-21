import React, { Component } from "react";

export default class MyprojectsHead extends Component {
  render() {
    return (
      <>
        <header className="text-gray-200 body-font bg-gray-900 ">
        <h1 className="text-center overflow-hidden before:h-[3px] after:h-[3px] after:bg-white 
           after:inline-block after:relative after:align-middle after:w-1/4 
           before:bg-white before:inline-block before:relative before:align-middle 
           before:w-1/4 before:right-3 after:left-3 text-xl p-5">My Projects
    </h1>
        </header>
      </>
    );
  }
}
