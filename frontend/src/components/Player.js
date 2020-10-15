import React from "react";
import YouTube from "react-youtube";

class Player extends React.Component {
  render() {
    const opts = {
      height: "500px",
      width: "700px",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <YouTube videoId="k1v7_zScivQ" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Player;
