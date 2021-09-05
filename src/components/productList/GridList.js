import React, { StrictMode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductData from '../../asset/api/productData.json';

import { BrowserRouter as Router, Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    // paddingRight:90,
    padding: 60,
  },

}));

export default function GridList() {
  const classes = useStyles();

  return (
    <div >
      <Grid container className={classes.root} spacing={2} row>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={10}>
            {ProductData.map(({ id, gallery, name, price, currency }) => (
              <Grid key={id} item >
                <Link to={`/product/${id}`}>
                  <div className="product-card" style={{ textAlign: 'center' }}>
                    <img src={gallery[0]} className="image-card" style={{ width: '160px', height: '250px' }} />
                    <div>
                      <h3>{name}</h3>
                      <span>{price}</span>
                      <span>{currency}</span>
                    </div>
                  </div>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>

  );
}