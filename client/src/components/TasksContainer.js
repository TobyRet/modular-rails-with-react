import React, { Component } from 'react';
import axios from 'axios';

class TasksContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/tasks.json')
      .then(response => {
        console.log(response)
        this.setState({
          tasks: response.data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
          { this.state.tasks.map( task => {
            return (
              <div>
                <h2>{ task.title } </h2>
                <h4> { task.content } </h4>
              </div>
            )
          })}
      </div>
    )
  }
}

export default TasksContainer;
