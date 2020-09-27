import React, { useMemo } from "react";
import { useVideoPlayerActions } from "../hooks/useVideoPlayerActions";

import { IVideoPlayer, IVideoPlayerComposition } from "../models/video.type";
import { VideoPlayerContext } from "../utils/videoPlayer.context";
import PlayBtn from "./buttons/PlayBtn";

const VideoPlayer: React.FC<IVideoPlayer> & IVideoPlayerComposition = ({
  children,
}) => {
  const {actions, state} = useVideoPlayerActions();

  const value = useMemo(() => ({actions, state}), [state]);
  return (
    <VideoPlayerContext.Provider value={value}>
      {children}
    </VideoPlayerContext.Provider>
  );
};

VideoPlayer.PlayBtn = PlayBtn;

export default VideoPlayer;
