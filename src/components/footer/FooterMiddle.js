import React from 'react';
import { useHistory } from 'react-router';
import { Button, Grid, Input, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase';
import MailIcon from '@material-ui/icons/Mail';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import privacy from '../../Envinova_PrivacyPolicy.pdf';
import termsOfService from '../../Envinova_TermsOfService.pdf';
import refundreturn from '../../Envinova_Refund and Return Policy.pdf';
const useStyles = makeStyles({
    gridItem: {
        padding: " 12px 0px"
    },
    grid1typographyupper: {
        // marginLeft: "12px",
        padding: "0 28px",
        textAlign: "center"
    },
    gridItemOne:{
        padding: "12px 28px"
    },
    grid2typography: {
        textAlign: "center",
        fontSize: "24px"
    },
    input: {
        // marginLeft: theme.spacing(1),
        flex: 1,
        padding: 0
    },
    
    subsButton:{
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: "black !important"
    },
    root: {
        marginTop: "22px",
        // padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 600,
    },
    containedPrimary: {
        // "$hover":{
        //     // backgroundColor: "black"
        // }
    },
    gridItemTwo: {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center"
    },
    mailIcon: {
        fontSize: 72,
        color: "pink"
    },
    mailAdd: {
        marginTop: 0
    },
    list: {
        listStyle: "none",
        marginTop: "24px"
    },
    listItem: {
        fontSize: "18px",
        textDecoration: "none",
        margin: "12px 0px"
    },
    anchor: {textDecoration: "none", color: "black",},
    bottomLine: {
        backgroundColor: "#35723A",
        height: "8px"
    }
})
function FooterMiddle() {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={0} style={{margin: "0px !important"}}>
                <Grid item xs={3} className={clsx(classes.gridItem, classes.gridItemOne)}>
                    <Typography className={classes.grid1typographyupper} variant="h5">
                        100 % Genuine and Authentic Products
                    </Typography>
                    <br/>
                    
                    <br/>
                    <Typography className={classes.grid1typographyupper} variant="h5">
                        Secure payment transactions 
                    </Typography>
                </Grid>
                <Grid item xs={6} className={clsx(classes.gridItem, classes.gridItemTwo)}>
                    <Typography className={classes.grid2typography}>
                        Subscribe to our newsletter for latest updates and offers
                    </Typography>
                    <Paper component="form" className={classes.root}>
                        
                        <InputBase
                            className={classes.input}
                            placeholder="Enter your Email"
                            inputProps={{ style:{paddingLeft: "8px", backgroundColor: "#EFEFEF"} }}
                        />
                        <Button variant="contained" color='primary' classes={{containedPrimary: classes.containedPrimary}} className={classes.subsButton}>Subscribe</Button>
                    </Paper>

                    <MailIcon className={classes.mailIcon}/>
                    <Typography variant="h5" className={classes.mailAdd}>care@envinovastore.com</Typography>
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <div className={classes.list}>
                        <ul className={classes.list}>
                        <a href={refundreturn} target = "_blank" className={classes.anchor}><li className={classes.listItem} >Refund & Return Policy</li></a>
                            <a href={privacy} target = "_blank" className={classes.anchor}><li className={classes.listItem} >Privacy Policy</li></a>
                            <a href={termsOfService} className={classes.anchor}><li className={classes.listItem}>Terms of Use</li></a>
                            <a href="#" className={classes.anchor}><li className={classes.listItem}>Sitemap</li></a>
                            <p>2021 enviNova Smartech. <br/>All rights reserved</p>
                        </ul>
                    </div>
                </Grid>
            </Grid>
            <hr className={classes.bottomLine}/>
        </div>
    )
}

export default FooterMiddle
