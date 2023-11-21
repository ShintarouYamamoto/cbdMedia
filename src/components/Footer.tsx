import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
            <Container maxWidth="lg">
                <Typography variant="body1" align="center">
                    © 2023 SharkUp
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
