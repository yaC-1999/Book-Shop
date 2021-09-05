import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Tooltip from '@material-ui/core/Tooltip';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 20,
        textAlign: 'center'

    },

}));

function Icon() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={5}>
                    <Grid item xs={12} >
                        <Tooltip title="علاقه مندم" placement="right">
                            <FavoriteBorderIcon  fontSize="large"/>
                        </Tooltip>

                    </Grid>
                    <Grid item xs={12}>
                    <Tooltip title="قبلا خوانده ام" placement="right">
                            <ImportContactsIcon  fontSize="large"/>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={12}>
                    <Tooltip title="پیشنهاد میکنم" placement="right">
                            <ThumbUpAltIcon  fontSize="large" />
                        </Tooltip>
                    </Grid>
                    <Grid item xs={12}>
                    <Tooltip title="پیشنهاد نمیکنم" placement="right">
                            <ThumbDownIcon  fontSize="large"/>
                        </Tooltip>
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default Icon;
