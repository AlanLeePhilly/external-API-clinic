import React from 'react';
import DeviceToggle from '../components/dashboard/DeviceToggle';
import MapContainer from './MapContainer';
import SpottyContainer from './SpottyContainer';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      device: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(device){
    this.setState({ device })
  }
  

  render() {
    let selectedDevice 
      if (this.state.device == "map") {
        selectedDevice = <MapContainer />
      } 
      if (this.state.device == "spotty") {
        selectedDevice = <SpottyContainer />
      }
    return(
      <div>
        <div className="row">
            <DeviceToggle 
              device={this.props.device}
              handler={this.handleChange}
            />
        </div>
        {selectedDevice}
      </div>
    )
  }
}
export default Dashboard;