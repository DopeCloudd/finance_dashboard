import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Title from '../Title';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { generateLastTwelveMonths } from '../../config/data';

const currencyFormatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
}).format;

const chartSetting = {
    height: 300,
};
const dataset = [
    {
        inflow: 25678,
        outflow: 21987,
        difference: 86,
        month: 'Jan',
    },
    {
        inflow: 45998,
        outflow: 76541,
        difference: 86,
        month: 'Fev',
    },
    {
        inflow: 67034,
        outflow: 56783,
        difference: 86,
        month: 'Mar',
    },
    {
        inflow: 19654,
        outflow: 4891,
        difference: 86,
        month: 'Apr',
    },
    {
        inflow: 12998,
        outflow: 45673,
        difference: 86,
        month: 'May',
    },
    {
        inflow: 76109,
        outflow: 6302,
        difference: 86,
        month: 'June',
    },
    {
        inflow: 9871,
        outflow: 19054,
        difference: 86,
        month: 'July',
    },
    {
        inflow: 76334,
        outflow: 56234,
        difference: 86,
        month: 'Aug',
    },
    {
        inflow: 98432,
        outflow: 23987,
        difference: 86,
        month: 'Sept',
    },
    {
        inflow: 23876,
        outflow: 1234,
        difference: 86,
        month: 'Oct',
    },
    {
        inflow: 65498,
        outflow: 87239,
        difference: 86,
        month: 'Nov',
    },
    {
        inflow: 54098,
        outflow: 12876,
        difference: 86,
        month: 'Dec',
    },
];

const valueFormatter = (value) => currencyFormatter(value);

export default function InflowsOutflows() {

    console.log(generateLastTwelveMonths);

    return (
        <React.Fragment>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline'
            }}>
                <Title>Inflows & outflows</Title>
                <IconButton
                    size="medium"
                    aria-label="edit"
                    color="inherit"
                >
                    <EditIcon />
                </IconButton>
            </Box>
            <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
                <BarChart
                    dataset={dataset}
                    xAxis={[{ scaleType: 'band', data: generateLastTwelveMonths }]}
                    series={[
                        { dataKey: 'inflow', label: 'Inflow', valueFormatter, color: '#AF7AC5' },
                        { dataKey: 'outflow', label: 'Outflow', valueFormatter, color: '#FDFEFE' },
                    ]}
                    {...chartSetting}
                    slotProps={{
                        legend: {
                            hidden: true
                        },
                    }}
                    margin={{ left: 70 }}
                />
            </div>
        </React.Fragment>
    );
}
