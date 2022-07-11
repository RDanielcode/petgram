import { css, keyframes } from 'styled-components'

const FadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`
const loadingFrame = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const appearing = ({ time = '1s', type = 'ease', count = 'infinite' } = {}) =>
  css`animation: ${time} ${loadingFrame} ${type} ${count};`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${FadeInKeyFrames} ${type};`
