// // components/VideoComponent.js
// import React from 'react';

// const VideoComponent = () => {
//   return (
//     <video width="1048" height="1048" controls autoPlay loop muted>
//       <source src="/video/Sinusoidal.mp4" type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//   );
// };

// export default VideoComponent;

// import React from 'react';
// import myGif from '/video/Sinusoidal.gif'; // Adjust the path as needed

// const VideoComponent = () => {
//   return (
//     <div className="flex justify-center items-center">
//       <img src={myGif as unknown as string} alt="Description of GIF" className="w-64 h-auto" />
//     </div>
//   );
// };

// export default VideoComponent;

import React from 'react';

const VideoComponent = () => {
  return (
    <div className="bg-black flex justify-center items-center">
      <img src="/video/Sinusoidal.gif" className="w-40 h-40 rounded-full border-2 border-zinc-700" />
    </div>
  );
};

export default VideoComponent;

