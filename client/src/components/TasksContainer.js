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
                <p>__________________</p>
                <h4>{ task.title } </h4>
                <p> { task.content } </p>
              </div>
            )
          })}
      </div>
    )
  }
}

export default TasksContainer;
