import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Button, styled, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <List sx={{ backgroundColor: '#000', height: '100%' }}>
                <ListItem button>
                    <ListItemText primary="カテゴリから探す" sx={{ color: 'white' }} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="ブランドから探す" sx={{ color: 'white' }} />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: '#000' }}>
                <Toolbar>
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                        Rakuten Rakuma
                    </Typography>
                    {!isMobile && (
                        <>
                            <Button sx={{ color: 'white', marginLeft: 2 }}>カテゴリから探す</Button>
                            <Button sx={{ color: 'white', marginLeft: 2 }}>ブランドから探す</Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true // Better open performance on mobile.
                }}
                sx={{
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, backgroundColor: '#000' },
                }}
            >
                {drawer}
            </Drawer>
        </div>
    );
};

export default Navbar;
