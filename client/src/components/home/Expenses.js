import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';
import EditIcon from '@mui/icons-material/Edit';
import { Typography } from '@mui/material';
import { expensesRows } from '../../config/data';

export default function Orders() {
  return (
    <React.Fragment>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline'
      }}>
        <Title>Recent Expenses</Title>
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
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expensesRows.slice(0, 3).map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography
        sx={{
          mt: 3,
          textDecoration: 'underline',
          cursor: 'pointer',
          width: 'fit-content',
          color: 'inherit'
        }}
        component={Link}
        to={'/expenses'}
      >
        See more expenses
      </Typography>
    </React.Fragment>
  );
}
