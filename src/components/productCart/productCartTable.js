import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import '../../asset/css/productCart/productCartTable.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";




const useStyles = makeStyles(() => ({
  root: {

    margin: 'auto',
    width: '70%',
    flexGrow: 1,
    padding: 15,
  },
  cover: {
    width: 80,
    height: 130,
  },
  font: {
    fontFamily: 'Samim'
  },
  Button: {
    width: '60%',
    marginLeft: '80px'
  }
}));



function ProductCartTable() {
  const classes = useStyles();

  var products = JSON.parse(localStorage.getItem('products'));

  const totalPrice = [];
  const totalDiscount = [];
  const TOTAL = [];



  return (

    <div >
      <div className="titel">
        <h2>سبد خرید شما</h2>
      </div>
      <TableContainer className={classes.root} component={Paper}>
        <Table className={classes.table} aria-label="simple table" >
          <TableHead>
            <TableRow >
              <TableCell align="center"></TableCell>
              <TableCell className={classes.font} align="center">محصول</TableCell>
              <TableCell className={classes.font} align="center">تعداد</TableCell>
              <TableCell className={classes.font} align="center">قیمت</TableCell>
              <TableCell className={classes.font} align="center">تخفیف</TableCell>
              <TableCell className={classes.font} align="center">قیمت کل</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {products.map((product) => {
              { totalPrice.push(product.price * product.qty) }
              { totalDiscount.push((product.price - product.discount) * product.qty) }
              { TOTAL.push((product.price * product.qty) - ((product.price - product.discount) * product.qty)) }


              return (
                <TableRow key={product.gallery}>
                  <TableCell align="center" component="th" scope="row">
                    <CardMedia
                      className={classes.cover}
                      image={product.gallery}
                    />
                  </TableCell>

                  <TableCell className={classes.font} align="center">
                    {product.name}
                  </TableCell>
                  <TableCell align="center">
                    {product.qty}
                  </TableCell>
                  <TableCell align="center">
                    {product.price}

                  </TableCell>
                  <TableCell align="center">
                    {product.price - product.discount}
                  </TableCell>
                  <TableCell align="center">
                    {product.discount * product.qty}
                  </TableCell>

                </TableRow>

              )
            })}

            <TableRow>
              <TableCell colSpan={3}></TableCell>
              <TableCell align="left">{totalPrice.reduce((previousScore, currentScore) => previousScore + currentScore, 0)}</TableCell>
              <TableCell className={classes.font} align="right">مبلغ کل بدون تخفیف</TableCell>

            </TableRow>


            <TableRow>
              <TableCell colSpan={3}></TableCell>
              <TableCell align="left">{totalDiscount.reduce((previousScore, currentScore) => previousScore + currentScore, 0)}</TableCell>
              <TableCell className={classes.font} align="right">مبلغ کل تخفیف</TableCell>

            </TableRow>
            <TableRow>
              <TableCell colSpan={3}></TableCell>
              <TableCell align="left">{TOTAL.reduce((previousScore, currentScore) => previousScore + currentScore, 0)}</TableCell>
              <TableCell className={classes.font} align="right">مبلغ کل با تخفیف</TableCell>

            </TableRow>
            <TableRow>
              <TableCell colSpan={6}>

                <Button className={classes.Button} align="center" variant="contained" color="secondary" >
                  نهایی کردن خرید
                </Button >
                <Link to={'/'}>
                  <Button variant="contained" color="primary" style={{ width: '30%' }}>
                    بازگشت به صفحه محصولات
                  </Button>
                </Link>

              </TableCell>
            </TableRow>

            <div>

            </div>
          </TableBody>

        </Table>
      </TableContainer >




    </div >
  )
}

export default ProductCartTable;
