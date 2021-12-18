import React from 'react'
import { Grid } from '@material-ui/core'
// import { mergeClasses } from '@material-ui/styles'
import { makeStyles } from '@material-ui/core/styles'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles({
    mainGrid: {
        backgroundColor: "#9FC8A8",
        height: "59px",
        top:3400,
        position: 'absolute',

    },
    icon: {
        // backgroundColor: "white",
        color: "white",
        cursor: "pointer",
        // fontSize: "44px"
    },
    gridItem: {
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
        
    }
})


function FooterUpperIcons() {
    const classes = useStyles();
    return (
        <div >
            <Grid container className={classes.mainGrid}  spacing={2} style={{margin: "0px"}}>
                <Grid item xs={4} />
                <Grid item xs={1} className={classes.gridItem}>
                    <FacebookIcon fontSize="large" className={classes.icon}/>
                </Grid>
                <Grid item xs={1} className={classes.gridItem}>
                    <InstagramIcon fontSize="large" className={classes.icon}/>
                </Grid>
                <Grid item xs={1} className={classes.gridItem}>
                    <TwitterIcon fontSize="large" className={classes.icon}/>
                </Grid>
                <Grid item xs={1} className={classes.gridItem}>
                    <LinkedInIcon fontSize="large" className={classes.icon}/>
                </Grid>
                <Grid item xs={4}/>
            </Grid>
        </div>
    )
}

export default FooterUpperIcons