import React from "react";
import "./App.css";
import InputField from "./components/input-field/InputField.component";
import TaskCollection from "./components/task-collection/TaskCollection.component";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: null,
      taskList: []
    };
  }

  handleChange = e => {
    this.setState({ userInput: e.target.value });
  };

  handleClick = () => {
    let updatedTask = this.state.taskList.concat(this.state.userInput);
    this.setState({ taskList: updatedTask });
  };

  removeTask = task => {
    let removedTaskList = this.state.taskList.filter(value => {
      return value !== task;
    });
    this.setState({ taskList: removedTaskList });
  };

  render() {
    return (
      <div className="App">
        <h1>TO DO LIST</h1>
        <InputField
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
        <TaskCollection
          taskList={this.state.taskList}
          removeTask={this.removeTask}
        />
      </div>
    );
  }
}

export default App;
