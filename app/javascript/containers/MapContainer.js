import React from 'react';
import ReactMapboxGl, { Layer, Feature, Popup, StyledPopup } from "react-mapbox-gl";
import mapboxgl from 'mapbox-gl'
import { geoJSONexample } from '../constants/constants';

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiYWxhbmpsZWUiLCJhIjoiY2pmOG53cmF0MmJ4aDJ3bG42NzA5bXJnbyJ9.Y03hrhDjP0RGc-krUnaZ0g"
});


class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieceOfState: null,
      anotherPiece: []
    }
  }
  
  render() {

    return(
      <div>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          center={geoJSONexample['coordinates']}
          containerStyle={{
            height: "100vh",
            width: "100vw"
          }}>
          <Layer 
            type="symbol"      
            id="marker"
            layout={{ "icon-image": "marker-15" }}>
            <Feature coordinates={geoJSONexample['coordinates']} />
          </Layer>
          <Popup key='1' coordinates={geoJSONexample['coordinates']}
            options={{closeButton: true}}>

              <div>test div</div>

          </Popup>
        </Map>
      </div>
    )
  }
}
export default MapContainer;


