import * as React from 'react';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import BarChartIcon from '@mui/icons-material/BarChart';

export const mainListItems = (
    <React.Fragment>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Summary" />
            </ListItemButton>
        </Link>
        <Divider sx={{ my: 1 }} />
        <Link to="/bank" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
                <ListItemIcon>
                    <AccountBalanceIcon />
                </ListItemIcon>
                <ListItemText primary="Bank account" />
            </ListItemButton>
        </Link>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <Link to="/management" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
                <ListItemIcon>
                    <DataUsageIcon />
                </ListItemIcon>
                <ListItemText primary="Management" />
            </ListItemButton>
        </Link>
    </React.Fragment>
);
