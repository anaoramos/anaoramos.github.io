import React from 'react'
import {
    createStyles,
    Grid,
    makeStyles,
    Theme,
    IconButton
} from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const usestyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            width: 'auto',
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        appbar: {
            alignItems: 'center',
        }
    }))

export const ContactItems = () => {
    const classes = usestyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className={classes.paper}>
                        <IconButton target="_blank" href={'https://www.linkedin.com/in/anaforamos'}
                                    size={"small"}><LinkedInIcon/></IconButton>
                        <IconButton target="_blank" href={'https://www.github.com/anaoramos'}
                                    size={"small"}><GitHubIcon/></IconButton>
                        <IconButton target="_top" href={'mailto:anaforamos@gmail.com'}
                                    size={"small"}><EmailIcon/></IconButton>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
