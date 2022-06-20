import React from "react";
import AboutMe from "./AboutMe";
import MyprojectsHead from "./MyprojectsHead";
import Myprojects from "./Myprojects";

export default function Home() {
  let gitrepo1 = "https://github.com/G4MB1T24/TemperatureDjango";
  let gitrepo2 = "https://github.com/G4MB1T24/Matrimonial-DatingSite";
  let proj1site = "http://temperature-backend.herokuapp.com/";
  let proj2site = "https://matridatingsite.herokuapp.com/";
  return (
    <>

      <div className="">
        <AboutMe></AboutMe>
      </div>
      <div>
        <MyprojectsHead></MyprojectsHead>
      </div>
      <div>
        <Myprojects
          proj1gitrepo={gitrepo1}
          proj1site={proj1site}
          proj2gitrepo={gitrepo2}
          proj2site={proj2site}
        ></Myprojects>
      </div>
    </>
  );
}
