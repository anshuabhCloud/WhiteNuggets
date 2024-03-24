import React from 'react';
import { AppBar, Toolbar,Button } from '@mui/material';

function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" onClick={() => window.location.href = '/Home'}>Home</Button>
                <Button color="inherit" onClick={() => window.location.href = '/product'}>Product</Button>
                <Button color="inherit" onClick={() => window.location.href = '/order-sample'}>Order Samples</Button>
                <Button color="inherit" onClick={() => window.location.href = '/contact'}>Contact</Button>
                <Button color="inherit" onClick={() => window.location.href = '/contact'}>About</Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
