import * as React from 'react';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';
import Title from '../Title';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { audFormatter } from '../../config/formatter';
import { amountsByCategory } from '../../config/data';

console.log(amountsByCategory);

export default function ExpensesCategories() {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <React.Fragment>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline'
            }}>
                <Title>All expenses of the month</Title>
                <IconButton
                    size="medium"
                    aria-label="edit"
                    color="inherit"
                    component={Link}
                    to={'/expenses'}
                >
                    <EditIcon />
                </IconButton>
            </Box>
            <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: amountsByCategory.Accomodation, label: 'Accomodation', color: '#AF7AC5' },
                                { id: 1, value: amountsByCategory.Shopping, label: 'Shopping', color: '#FDFEFE' },
                                { id: 2, value: amountsByCategory.Food, label: 'Food', color: '#BFC9CA' },
                                { id: 3, value: amountsByCategory.Entertainement, label: 'Entertainement', color: '#616161' },
                            ],
                            innerRadius: 70,
                            outerRadius: 100,
                            paddingAngle: 5,
                            cornerRadius: 5,
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            valueFormatter: (data) => audFormatter(data.value)
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
