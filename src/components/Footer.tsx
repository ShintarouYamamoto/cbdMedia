import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
            <Container maxWidth="lg">
                <Typography variant="body1" align="center">
                    © 2023 SharkUp
                </Typography>
                <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                    <Link href="#" color="inherit" underline="hover">
                        Privacy Policy
                    </Link>
                    {' | '}
                    <Link href="#" color="inherit" underline="hover">
                        Terms of Use
                    </Link>
                    {' | '}
                    <Link href="#" color="inherit" underline="hover">
                        Contact Us
                    </Link>
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
