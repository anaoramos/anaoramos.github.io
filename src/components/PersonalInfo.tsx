import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {createStyles, Theme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import profilePhoto from "../assets/profile.png";
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 830,
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 600,
        },
        image: {
            width: 400,
            height: 400,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
        typographyStart: {
            fontFamily: "monospace",
            fontWeight: "bolder",
            color: "slategrey"
        },
    }),
);

const infoEnd = (
    <Typography variant="body2" gutterBottom style={{fontFamily: "monospace"}}>
        I am a biomedical engineer from Vila do Conde working as a full stack developer.
        I consider myself a fast, adaptable,and continuous learner who is organized and self-taught.
        <br/>
        All my life I haven't been that good at sports, I've tried volleyball, golf, badminton, archery, dancing ... but
        I wasn't good at all.
        I've always preferred to go for a walk in nature or near the river and then stop to listen to music or reading
        a
        book.
        Today I still love doing these things. I love reading and listening to music or podcasts.
        <br/>
        I have already lived in Braga, Madrid and Lisbon.
        I really like to know new cities from a touristic point of view or as a local. My next big dream trip is to New
        York. I really want to see what the big apple looks like and I'm sure I won't have to wait too long for it.
    </Typography>
)

export const PersonalInfo = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={6} sm container style={{width: '150%'}} alignItems={"center"}>
                    <Grid item xs container direction="column" spacing={1}>
                        <Grid item xs>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                            }}>
                                <RemoveIcon fontSize={"large"} style={{color: "slategrey"}}/>
                                <Typography variant="h5" gutterBottom className={classes.typographyStart}>
                                    HI, MY NAME IS
                                </Typography>
                            </div>
                            <Typography variant="h1" gutterBottom style={{fontFamily: "monospace"}}>
                                Ana Ramos
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            {infoEnd}
                        </Grid>
                    </Grid>
                    <Grid item xs container direction="column" spacing={1} style={{width: 'auto'}}>
                        <Grid item xs>
                            <div className={classes.image}>
                                <img className={classes.img} alt="complex" src={profilePhoto}/>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
