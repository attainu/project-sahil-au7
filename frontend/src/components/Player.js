import React from "react";
import YouTube from "react-youtube";

// export default function Player(props){
//     const opts = {
//       height: "500px",
//       width: "100%",
//       playerVars: {
//         // https://developers.google.com/youtube/player_parameters
//         autoplay: 1,
//       },
//     };

//     console.log()

//     return (
//       <YouTube videoId="k1v7_zScivQ" />
//     );
//   }

export default function Player(props) {
  const opts = {
    height: "500px",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return (
    <YouTube
      videoId={props.link.map((v) => v.split("&")[0])[0]}
      opts={opts}
      onReady={_onReady}
    />
  );
}
