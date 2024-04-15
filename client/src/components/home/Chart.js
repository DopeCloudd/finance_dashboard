import * as React from 'react';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';
import Title from '../Title';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const currencyFormatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
}).format;

export default function Chart() {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <React.Fragment>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline'
            }}>
                <Title>Financial Diversification</Title>
                <IconButton
                    size="medium"
                    aria-label="edit"
                    color="inherit"
                    component={Link}
                    to={'/financial-diversification'}
                >
                    <EditIcon />
                </IconButton>
            </Box>
            <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: 10000, label: 'Bank account', color: '#AF7AC5' },
                                { id: 1, value: 500, label: 'Crypto', color: '#FDFEFE' },
                                { id: 2, value: 500, label: 'Stock market', color: '#BFC9CA' },
                            ],
                            innerRadius: 70,
                            outerRadius: 100,
                            paddingAngle: 5,
                            cornerRadius: 5,
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            valueFormatter: (data) => currencyFormatter(data.value)
                        },
                    ]}
                    margin={{ top: 50, bottom: 50, left: 50, right: 50 }}
                    slotProps={{
                        legend: {
                            hidden: !isLargeScreen,
                            direction: 'column',
                            position: { vertical: 'center', horizontal: 'right' },
                            padding: 0,
                        },
                    }}
                    height={250}
                />
            </div>
        </React.Fragment>
    );
}
