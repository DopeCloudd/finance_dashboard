import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Title from '../Title';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { audFormatter } from '../../config/formatter';
import { last15Days, generateRandomAmounts } from '../../config/data';

export default function EvolutionSummary() {

    return (
        <React.Fragment>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline'
            }}>
                <Title>Balance over time</Title>
                <IconButton
                    size="medium"
                    aria-label="edit"
                    color="inherit"
                >
                    <EditIcon />
                </IconButton>
            </Box>
            <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
                <LineChart
                    xAxis={[
                        {
                            id: 'Day',
                            data: last15Days,
                            scaleType: 'time',
                            valueFormatter: (date) => date.getDate().toString().padStart(2, '0') + '/' + (date.getMonth() + 1).toString().padStart(2, '0'),
                        },
                    ]}
                    series={[
                        {
                            id: 'Evolution',
                            curve: "catmullRom",
                            data: generateRandomAmounts,
                            valueFormatter: (data) => audFormatter(data),
                            color: '#AF7AC5',
                            showMark: false,
                            area: true,
                        },
                    ]}
                    slotProps={{
                        legend: {
                            hidden: true
                        },
                    }}
                    height={300}
                    margin={{ left: 70 }}
                />
            </div>
        </React.Fragment>
    );
}
