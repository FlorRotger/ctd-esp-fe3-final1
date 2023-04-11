import {styled} from '@mui/material/styles';
import fondo from '../assets/images/44406.jpg';
import { Box } from '@mui/material';

export const AuthContainer = styled(Box)`
  background-image: url(${fondo});
  background-size: cover;
  min-height: 100%;
  position: fixed;
  width: 100%;
  background-repeat: no-repeat;
  background-color: #4444;
`;

export const Glass = styled(Box)`
  background: rgba( 255, 255, 255, 0.75 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 6.5px );
-webkit-backdrop-filter: blur( 6.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: auto;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
