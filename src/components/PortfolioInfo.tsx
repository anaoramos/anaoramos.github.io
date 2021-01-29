import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import {IconButton, Paper} from "@material-ui/core";

import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    table: {
        // minWidth: 650,
    },
});

function createData(name: string, url: string, languages: string) {
    return {name, url, languages};
}

const rows = [
    createData('Database of pharmaceutical management', 'https://github.com/anaoramos/prescription-pharmacy-system.git', 'Python'),
    createData('Implementation of auction systems', 'https://github.com/anaoramos/auction-system.git', 'C'),
    createData('Implementation of multi-agent systems for pharmacy management with Java Agent Development Framework', 'https://github.com/anaoramos/pharmacy-multi-agent-system.git', 'Java'),
    createData('GeoLoad Plugin', 'https://github.com/anaoramos/GeoLoad-Plugin.git', 'Python, Makefile, Batchfile, Shell, QML'),
    createData('Cash Transactions Simulator(BTC to USD)', 'https://github.com/anaoramos/transactions_btc_usd.git', 'JavaScript'),
];


export const PortfolioInfo = () => {
    const classes = useStyles();

    return (
        <React.Fragment>

            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row" size={"small"}>
                                    <IconButton target="_blank" href={row.url} size={"small"}><GitHubIcon/></IconButton>
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.languages}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
}
