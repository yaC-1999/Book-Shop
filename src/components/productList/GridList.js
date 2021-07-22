import React, { StrictMode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../../asset/css/productList/GridList.css';
import ProductData from '../../asset/api/productData.json';

import { BrowserRouter as Router, Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function GridList() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div style={{paddingRight:"60px"}}>
 <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={10}>
          {ProductData.map(({id, imageURL, name, price, currency}) => (
            <Grid key={id} item>
<Router>

</Router>
<Link to={`/product/${id}`}>        
                  <div className="product-card" style={{textAlign:'center'}}>
                    <img src={imageURL} className="image-card" style={{width:'160px', height:'250px' }}/>
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