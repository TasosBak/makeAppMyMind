import React from "react";
import "./App.css";

// import Button from "react-bootstrap/Button";

import { Header } from "./Header";
// import Container from "react-bootstrap/Container";
import { Options } from "./Options";
import { Action } from "./Action";
import { AddOption } from "./AddOption";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      // title: "Indecision App",
      // subtitle: "Put your life in the hands of a computer",
      options: props.options,
    };
  }

  componentDidMount() {
    console.log("componentDidMount :>> ");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate :>> ");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount :>> ");
  }

  // Handle Delete options
  handleDeleteOptions() {
    this.setState(() => ({
      options: [],
    }));
  }

  // Handle Pick
  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNumber]);
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    console.log(option);
    this.setState((prevState) => ({
      options: [...prevState.options, option],
    }));
  }
  handleDeleteOption(option) {
    this.setState((prevState) => ({
      options: prevState.options.filter((item) => item !== option),
    }));
  }

  render() {
    const app = {
      title: "Indecision App",
      subtitle: "Put your life in the hands of a computer",
      options: ["Thing one", "thing too", "thing three"],
    };

    const { title, subtitle } = app;
    return (
      <div className="App">
        <Header title={title} subtitle={subtitle}></Header>

        <User name={"tasos"} age={2}></User>
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        ></Options>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <AddOption handleAddOption={this.handleAddOption}></AddOption>
      </div>
    );
  }
}

export default App;

const User = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

App.defaultProps = {
  options: ["Default 1", "Default 2"],
};
