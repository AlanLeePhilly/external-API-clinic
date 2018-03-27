import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { geoJSONexample } from '../constants/constants';

const Map = ReactMapboxGl({
  accessToken: "<<HEY YOU, GO GET YOUR OWN ACCESS TOKEN FROM MAPBOX.COM>>"
});

const lineLayout = {
  'line-cap': 'round',
  'line-join': 'round'
};

const linePaint = {
  'line-color': '#4790E5',
  'line-width': 12
};

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
            height: "100vh",
            width: "100vw"
          }}>
          <Layer type="line" layout={lineLayout} paint={linePaint}>
            <Feature coordinates={geoJSONexample['coordinates']} />
          </Layer>
        </Map>
      </div>
    )
  }
}
export default MapContainer;


