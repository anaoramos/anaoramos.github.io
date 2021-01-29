import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {createStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 600,
        },
        image: {
            width: 228,
            height: 228,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
    }),
);

interface InfoStepProps {
    srcImage: string | undefined,
    textInformation: React.ReactNode,
}

export const InfoStep = (props: InfoStepProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={1}>
                    <div className={classes.image}>
                        <img className={classes.img} alt="complex" src={props.srcImage}/>
                    </div>
                    <Grid item xs={6} sm container>
                        <Grid item xs container direction="column" spacing={1}>
                            <Grid item xs>
                                {props.textInformation}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
