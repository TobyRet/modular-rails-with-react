import React, { Component } from 'react';
import axios from 'axios';

class AllocationContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      offenders: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/offenders.json')
      .then(response => {
        console.log(response)
        this.setState({
          offenders: response.data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
          { this.state.offenders.map( offender => {
            return (
              <div>
                <p>__________________________________</p>
                <h4>Offender name: { offender.name } </h4>
                <p>Risk level: { offender.risk_level } </p>
              </div>
            )
          })}
      </div>
    )
  }
}

export default AllocationContainer;
