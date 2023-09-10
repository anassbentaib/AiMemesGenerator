import styled from "styled-components";

export const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  z-index: -1;

  video{
    object-fit: cover;
    width: 100%;
    height: 100vh;
    z-index: -1;
}
`
