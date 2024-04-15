import * as React from 'react';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Title from '../components/Title';
import Chart from '../components/home/Chart';
import Expenses from '../components/home/Expenses';
import EvolutionSummary from '../components/home/EvolutionSummary';
import InflowsOutflows from '../components/home/InflowsOutflows';
import ExpensesCategories from '../components/home/ExpensesCategories';
import Copyright from '../components/Copyright';

function Home() {

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            paddingLeft: 2,
                        }}
                    >
                        <Title>Current balance</Title>
                        <Typography variant='h3'>$12,491.12</Typography>
                    </Box>
                </Grid>
                {/* Balance over time */}
                <Grid item xs={12}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                        }}
                    >
                        <EvolutionSummary />
                    </Paper>
                </Grid>
                {/* Inflows & outflows */}
                <Grid item xs={12}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                        }}
                    >
                        <InflowsOutflows />
                    </Paper>
                </Grid>
                {/* Chart */}
                <Grid item xs={12} md={6} lg={6}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                        }}
                    >
                        <Chart />
                    </Paper>
                </Grid>
                {/* All expenses */}
                <Grid item xs={12} md={6} lg={6}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                        }}
                    >
                        <ExpensesCategories />
                    </Paper>
                </Grid>
                {/* Expenses */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Expenses />
                    </Paper>
                </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
        </Container>
    );
}

export default Home;