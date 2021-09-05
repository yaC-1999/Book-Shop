import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ProductData from '../../asset/api/productData.json';




const useStyles = makeStyles({
    table: { fontFamily: 'Samim' }
});


// ----------------------------
function ProductTable(props) {
    const { id } = useParams();
    const [currentProduct ,setCurrentProduct] = useState(null);

    useEffect(() => {
       const product = ProductData.find(p => p.id.toString() === id);
        setCurrentProduct(product);
        
    }, [id]);


    const classes = useStyles();

    
    const createData = (name, detail) => {
        return { name, detail }
    }
    const rows = [

        createData('موضوع کتاب:', `${currentProduct?.grouping}`),
         createData('نویسنده:', `${currentProduct?.specification.writer}`),
         createData('مترجم:', `${currentProduct?.specification.translator}`),
         createData('سال انتشار:', `${currentProduct?.specification.yearOfPublication}`),
         createData('تعداد صفحات:', `${currentProduct?.specification.numberOfPages}`),
    
    ];
    return (

        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table" >
                <TableHead>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell align="right" component="th" scope="row">
                                <div style={{ fontFamily: 'Samim' }} >
                                    {row.name}
                                    {/* <BlogPost/> */}
                                </div>
                            </TableCell>
                            <TableCell align="right">
                                <div style={{ fontFamily: 'Samim' }}>
                                    {row.detail}
                                </div></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ProductTable;
