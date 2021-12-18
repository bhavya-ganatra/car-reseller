import React, { useEffect, useState } from 'react'
import './MyAccount.css'
import Carousel from 'react-material-ui-carousel'
import { Grid, makeStyles } from '@material-ui/core'
import Navbar from '../Components/Navbar'
import Postcard from '../Components/Postcard'

// import db from '../firebase'
import db from '../Firebase'

function MyAccount() {
    const carnames = ["car1","car2","car3","car4","car5","car6"]
    // const carnames=[]
    const [cars,setCars] = useState([]);
    const user = JSON.parse(localStorage.curuser)
    
    useEffect(()=>{
        db.collection('users')
        .doc('user1')//id of document -- current user
        .onSnapshot((queryData)=>{
            console.log(queryData.data().mycars)
            // queryData.map(doc=>console.log("yy",doc.data()))
            // setCars(queryData.data().mycars)
            setCars(queryData.data().mycars)
        })
        // .catch(err=>console.log(err))

        console.log(cars)
    },[])

    

    return (
        <div className="myaccount">
            <Navbar/>
            <div className="userdetail">
                <ul className="userdetail_ul">
                    <li className="userdetail_li">
                        <label>Name:</label>
                        <span>{user.displayName}</span>
                    </li>
                    <li className="userdetail_li">
                        <label>Email:</label>
                        <span>{user.email}</span>
                    </li>
                </ul>
            </div>
            

            <div className="carsold">
                {cars && cars.length>0?
                    (
                        <div>
                        <h1>Sold Cars</h1>
                        <Carousel className="carsold_carousel">
                        {cars.map((car)=>(
                            <Grid key={car.carid} container justifyContent="center">
                                {/* <Postcard id={car.carid} carModel={car.name} price={car.price} 
                                image={<img src=""/>} buysell={car.type}/> */}
                                <h1>{car.name}</h1>
                            </Grid>
                        ))
                        }
                        </Carousel>
                        </div>
                    )
                    :(
                        <h3>You have not sold any cars</h3>
                    )
                }
            </div>

                {/* <Carousel> */}
                    {/* <Grid container spacing={3}>
                        
                            <Grid item xs={4}>
                                <ImgMediaCard carname="car1"/>
                            </Grid>
                            <Grid item xs={4}>
                                <ImgMediaCard carname="car2"/>
                            </Grid>
                            <Grid item xs={4}>
                                <ImgMediaCard carname="car3"/>
                            </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                    
                        <Grid item xs={4}>
                            <ImgMediaCard carname="car4"/>
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard carname="car5"/>
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard carname="car6"/>
                        </Grid>
                    </Grid> */}
                {/* </Carousel> */}

            {/* <Grid container component="main" className={classes.root123}>
                <CssBaseline />
                <Grid item xs={4}>
                    <Carousel >
                        <div  >
                        <ImgMediaCard carname="car2" className={classes.image123}/>
                        </div> 
                        <div >
                        <ImgMediaCard carname="car2" className={classes.image123}/>
                        </div> 
                        <div >
                        <ImgMediaCard carname="car2" className={classes.image123}/>
                        </div> 
                    </Carousel>
                </Grid>
            </Grid> */}
            {/* <div className={classes.root}>
                <Grid container spacing={3}>
                   
                    <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                </Grid>
            </div> */}
        </div>
    )
}

export default MyAccount
