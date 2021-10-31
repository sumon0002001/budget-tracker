import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core';



import useStyles from './styles'

const Main = () => {
    const classes = useStyles();
    return (
        <Card className= {classes.root}>
          <CardHeader title="Expense Tracker" subheader= "Powered by Speechly" />
          <CardContent className= {classes.cartContent} >
              <Typography align = "center" variant = "h5" >
                  Total Balance : $100
              </Typography>
              <Typography align = "center" variant = "h5" >
                  Total Balance : $100
              </Typography>
              <Divider  className={classes.divider}/>
              {/* <Form /> */}

          </CardContent>
          <CardContent className= {classes.cartContent} >
            <Grid container spacing={2} >
                <Grid item xs ={12}>
                    {/* <List/> */}

                </Grid>
            </Grid>
              <Typography align = "center" variant = "h5" >
                  Total Balance : $100
              </Typography>
              <Typography align = "center" variant = "h5" >
                  Total Balance : $100
              </Typography>
              <Divider  className={classes.divider}/>
              {/* <Form /> */}

          </CardContent>
            
        </Card>
    )
}

export default Main
