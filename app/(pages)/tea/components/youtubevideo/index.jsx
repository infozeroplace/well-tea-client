function YoutubeVideo({ youtubeLink }) {
  return (
    <iframe
      className="rounded-md aspect-video w-full h-full"
      src={youtubeLink}
      allowFullScreen
    ></iframe>
  );
}

export default YoutubeVideo;
