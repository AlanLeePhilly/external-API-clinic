import React from 'react';


class SpottyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
  }
componentDidMount(){
  fetch('https://api.spotify.com/v1/users/1232211818/playlists/2N3OU890oe33XB7f8tqKXX/tracks',{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer BQBwo2C6tXm8CwuvD3xSOX1If5bTbG-zAg0tbmLW-002ffXGQMyUC8V39zgdOuNxOF56Q3Q3rZX1IqQG1j1oIjkV_UH3nuNICoVGTnT3VljrNAUR2FRhA447Q1hOcoVRxoGqPvteMxiBNH8'
    }  
  }  
)
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
      error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.json())
  .then(body => {
    this.setState({ songs: body.items})
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let songs = this.state.songs.map((song, i) =>{
      return(
        <div key={i}>
          <p>{song.track.artists[0].name} - {song.track.name}</p>
        </div>
      )
    })
    return(
      <div>
        {songs}
      </div>
    )
  }
}
export default SpottyContainer;