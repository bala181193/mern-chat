import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Drawer, Divider } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../../images/logo.svg";
import '../../styles/header.css'

const Headrer = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer =
        (
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                <Typography
                    color={"goldenrod"}
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, my: 2 }}
                >
                    <img src={Logo} alt="logo" height={"70"} width="200" />
                </Typography>
                <Divider />
                <ul className="mobile-navigation">
                    <li>
                        <NavLink activeClassName="active" to={"/"}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/menu"}>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>Contact</NavLink>
                    </li>
                </ul>
            </Box>
        )

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{
                            mr: 2,
                            display: { sm: "none" },
                        }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color={'goldenrod'} component="div" sx={{ flexGrow: 1 }}>
                        <FastfoodIcon />
                        News
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <ul className="nav-menu-bar">
                            <li>
                                <NavLink activeClassName="active" to={"/"}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/menu"}>Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/about"}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/contact"}>Contact</NavLink>
                            </li>
                        </ul>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component={'nav'}>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    )
}
export default Headrer