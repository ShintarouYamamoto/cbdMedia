import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const imageUrls = [
  '../public/imgs/map.jpg',
  // 他の画像も同様に追加可能
];

const Carousel: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = imageUrls.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <IconButton
        onClick={handleBack}
        sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <Box
        component="img"
        src={imageUrls[activeStep]}
        sx={{ width: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
      />
      <IconButton
        onClick={handleNext}
        sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Carousel;
