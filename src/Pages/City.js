import React, {useState, useEffect} from 'react';
import { Grid } from "@material-ui/core";
import Postcard from "../Components/Postcard";
import Navbar from "../Components/Navbar";
import { makeStyles } from '@material-ui/core/styles';
import db from '../Firebase';

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
  }));

export default function City(){
    const classes = useStyles();
    const pathname = window.location.pathname
    const myArray = pathname.split("/");
    const location = myArray[2];
    const [cars,setCars]=useState([])

    useEffect(() => {
        console.log(location)
        db.collection('cars')
        .where('location', '==', location)
        .where('carStatus','==','onSell')
        .onSnapshot((snapshot) => {
          setCars(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            })) 
        );
        });
      }, []);

    return(
        <div>
            <Navbar className={classes.appBar}/>
            <div style={{marginTop: '70px'}}>
            <Grid container spacing={1}>
                {cars?.map(({ id, data }) => (
                    <Grid key={id} item xs={12} sm={6} md={3} lg={2}>
                    <Postcard
                        id={id}
                        data={data}
                    />
                    </Grid>
                ))}
            </Grid>
            </div>
        </div>
    );
}