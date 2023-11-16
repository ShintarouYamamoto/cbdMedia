import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ImageCarousel: React.FC = () => {
    const images = [
        '/path/to/image1.jpg',
        '/path/to/image2.jpg',
        '/path/to/image3.jpg',
        // ここに他の画像のパスを追加
    ];

    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
    };

    return (
        <div>
            <Paper square elevation={0} sx={{ display: 'flex', alignItems: 'center', height: 50, pl: 2, bgcolor: 'background.default' }}>
                <IconButton onClick={handleBack} disabled={activeStep === 0} aria-label="previous image">
                    <ArrowBackIosIcon />
                </IconButton>
                <img src={images[activeStep]} alt={`image ${activeStep}`} style={{ height: 300, width: '100%', objectFit: 'cover' }} />
                <IconButton onClick={handleNext} disabled={activeStep === maxSteps - 1} aria-label="next image">
                    <ArrowForwardIosIcon />
                </IconButton>
            </Paper>
        </div>
    );
};

export default ImageCarousel;
