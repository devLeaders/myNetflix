import React from 'react'
import styled from 'styled-components';
import { Device } from '../../../common/styles/constans/Device';

const StyledVideo = styled.video`
  width: 100%;

  @media ${Device.LAPTOP} {
      flex-direction: row;
      /* width:80%; */
      width:calc(100% - 475px);
  }
`;

class VideoPlayerComponent extends React.Component<any>{

    render() {
        return (
            <StyledVideo controls>
                <source src="video.mp4" type="video/mp4"></source>
            </StyledVideo>
        )
    }
}

export default VideoPlayerComponent;