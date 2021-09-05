import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GalleryPicture from '../components/productDetails/GalleryPicturs';
import ProductTabs from '../components/productDetails/ProductTabs';
import Icon from '../components/productDetails/Icon';
import CenterGrid from '../components/productDetails/CenterGrid';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 50,

    },
}));

function ProductDetails() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <GalleryPicture />
                </Grid>
                <Grid item xs={6} >
                    <CenterGrid />
                </Grid>
                <Grid item xs={2}>
                    <Icon />
                </Grid>
                <Grid item xs={12} >
                    <ProductTabs />
                </Grid>

            </Grid>
        </div>
    )
}

export default ProductDetails;
