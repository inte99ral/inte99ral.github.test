// API & Library
import styled from 'styled-components';

// Asset
import test from 'asset/image/test.png';

export const StyledPage = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${test});
  background-repeat: no-repeat;
  background-size: cover;
`;
