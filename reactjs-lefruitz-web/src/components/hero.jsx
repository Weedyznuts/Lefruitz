import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Watermelon from '../assets/img/watermelon2.jpg';

export default function hero() {
  return (
    <Box className="heroWatermelon">
        <img src={Watermelon} alt=''/>
        <Box className="overlay">
        </Box>
    </Box>
  )
}
