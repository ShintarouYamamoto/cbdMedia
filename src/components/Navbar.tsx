import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Button,
    useTheme,
    useMediaQuery,
    Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <IconButton
                onClick={handleDrawerToggle}
                sx={{ position: 'absolute', right: 10, top: 10, color: 'white' }}
            >
                <CloseIcon /> {/* 閉じるボタン */}
            </IconButton>
            <List sx={{ backgroundColor: 'success.main', height: '100%', paddingTop: 3 }}>
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
            <AppBar position="static" sx={{ backgroundColor: 'success.main' }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: 'inherit' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', color: 'white' }}>
                        CBD Media
                    </Typography>
                    {!isMobile && (
                        <Box sx={{ display: 'flex' }}>
                            <Button sx={{ color: 'white', marginLeft: 2 }}>カテゴリから探す</Button>
                            <Button sx={{ color: 'white', marginLeft: 2 }}>ブランドから探す</Button>
                        </Box>
                    )}
                    {isMobile && <Box sx={{ width: 48 }} />} {/* この空のBoxはアイコンボタンのスペースを占めるために使用 */}
                </Toolbar>
            </AppBar>
            <Drawer
                variant="temporary"
                anchor="left" // ドロワーを左側に配置
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true // Better open performance on mobile.
                }}
                sx={{
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, backgroundColor: 'success.main' },
                }}
            >
                {drawer}
            </Drawer>
        </div>
    );
};

export default Navbar;
