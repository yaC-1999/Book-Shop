import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ProductData from '../../asset/api/productData.json';
import '../../asset/css/productList/GridList.css';

const useStyles = makeStyles({
  root: {
    width: 190,
    margin: 'auto',
  },
  media: {
    height: 250,
  },
});

function CardList() {
  const classes = useStyles();
     const cardData = ProductData.map(({id , imageURL , name , price , currency})=>{
      
   
  return (

    <Card className={classes.root} >
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={imageURL}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
{price}{currency}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small"  style={{backgroundColor:"rgb(196, 0, 0)" , color:"white"}}>
        افزودن به سبد خرید
      </Button>
      {/* <Button size="small" >
        Learn More
      </Button> */}
    </CardActions>
  </Card>
  )
});
return cardData;
}

export default CardList;
