import React, { Component } from "react";
import Header from "../components/hearder/Header";
import ProjectList from "../components/projectlist/ProjectList";
import "../containers/Solaris.css";
import Typography from "@material-ui/core/Typography";

export default class Solaris extends Component {
  render() {
    return (
      <div className="flex-container">
        <div>
          <Header></Header>
        </div>
        <div>
          <div className="flex-container-nest">
            <div>
              <Typography>Projects</Typography>
            </div>
            <div>
              {" "}
              <ProjectList></ProjectList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
