import React, { useState } from 'react';
import { Box } from '@mui/system';
import { IconButton, Menu, MenuItem } from '@mui/material';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { Link } from 'react-router-dom';

export default function DashboardMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box component={'div'}>
            <IconButton
                aria-controls={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                size="small"
            >
                <ViewHeadlineIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <MenuItem onClick={handleClose}>
                        Dashboard
                    </MenuItem>
                </Link>
                <Link to="/counter" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <MenuItem onClick={handleClose}>
                        Counter
                    </MenuItem>
                </Link>
                <Link to="/libri" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <MenuItem onClick={handleClose}>
                        Libri
                    </MenuItem>
                </Link>
            </Menu>
        </Box>
    );
};
