import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import DrawControl from 'react-mapbox-gl-draw';
import { geoJSONexample } from '../constants/constants';
import { GeoJSONLayer } from "react-mapbox-gl";


import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

const lineLayout = {
  'line-cap': 'round',
  'line-join': 'round'
};

const linePaint = {
  'line-color': '#4790E5',
  'line-width': 12
};

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
          containerStyle={{
            height: "700px",
            width: "700px"
          }}
          center={geoJSONexample['coordinates'][0]}>
          <Layer type="line" layout={lineLayout} paint={linePaint}>
            <Feature coordinates={geoJSONexample['coordinates']} />
          </Layer>
        </Map>
      </div>
    )
  }
}
export default MapContainer;


