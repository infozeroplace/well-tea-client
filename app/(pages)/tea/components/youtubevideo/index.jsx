import React from 'react'

function YoutubeVideo({ youtubeLink }) {
  return (
    <div>
      <iframe
          className="rounded-md aspect-video w-full h-full"
          src={youtubeLink}
          allowFullScreen
        ></iframe>
    </div>
  );
}

export default YoutubeVideo;