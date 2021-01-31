import React from 'react'
import {
    AppBar,
    createStyles,
    Menu,
    Grid,
    Avatar,
    makeStyles,
    Theme,
    Typography,
    Toolbar,
    IconButton
} from '@material-ui/core'
import profilePhoto from '../assets/profile.png'
import {ContactItems} from "./ContactItems";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const usestyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1
        },
        icon: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex'
            }
        }
    }))

export const NavigationBar = () => {
    const classes = usestyles();
    const [anchorProfileMenu, setAnchorProfileMenu] = React.useState<null | HTMLElement>(null);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorProfileMenu(event.currentTarget)
    }

    const renderProfileMenu = (
        <Menu
            anchorEl={anchorProfileMenu}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={'primary-search-account-menu'}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={Boolean(anchorProfileMenu)}
            onClose={() => {
                setAnchorProfileMenu(null)
            }}
        >
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{padding: 20}}
            >
                <Avatar src={profilePhoto} style={{width: 60, height: 60, marginBottom: 20}}/>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="h3">
                    Ana Ramos
                </Typography>
                <ContactItems/>
            </Grid>

        </Menu>
    )

    return (
        <AppBar position="static" style={{backgroundColor: "lightslategrey"}}>
            <Toolbar>
                <Typography variant="h4" style={{fontFamily:"monospace"}}>Ana Ramos</Typography>
                <div className={classes.grow}/>
                <div className={classes.icon}>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={'primary-search-account-menu'}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit">
                        <PersonOutlineIcon fontSize={"large"}/>
                    </IconButton>
                </div>
            </Toolbar>
            {renderProfileMenu}
        </AppBar>
    )
}
