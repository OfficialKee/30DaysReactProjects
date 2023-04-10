import React from "react";
import TechList from "./TechList";


class Main extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <main>
          <div className='main-wrapper'>
            <p>Prerequisite to get started react.js:</p>
            <ul>
              <TechList techs={this.props.techs} />
            </ul>
          </div>
        </main>
      )
    }
  }

  export default Main;