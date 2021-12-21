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
    let user=null
    if(localStorage.curuser){
      user = JSON.parse(localStorage.curuser)
    }
    
    useEffect( ()=>{
        if(localStorage.curuser){
            user = JSON.parse(localStorage.curuser)
          }
        console.log(user.uid)
        let allCars = []
        
        // const setVal = async ()=>{
        // db.collection('users')
        // .doc(user.uid)
        // .collection('mycarsCollection')
        // .get()
        // .then(qData=>{
        //     // setCars(qData.docs.map(doc=>doc.data()))
        //     // qData.docs.map(doc=>console.log(doc.data()))
            
        //     qData.docs.forEach(element => {
        //         console.log(element.data().carid)
        //        db.collection('cars').doc(element.data().carid).get()
        //     //    .then(res=>allCars.push(res.data()))
        //         .then(res=>setCars(prevState => [...prevState, res.data())] )
        //     })

        //     // console.log(qData)
        // })
        //     // setCars(allCars)
        //     console.log(cars)
        // }
        // setVal()


        // TODO: In Sell Page store all the Attributes
        db.collection('users')
        .doc(user.uid)
        .collection('mycarsCollection')
        .get()
        .then(qData=>{
            setCars(qData.docs.map(doc=>doc.data()))
            // qData.docs.map(doc=>console.log(doc.data()))

            // console.log(qData)
        })
        // console.log('cars',cars)
        



        // db.collection('users')
        // .doc('user1')//id of document -- current user
        // .onSnapshot((queryData)=>{
        //     console.log(queryData.data().mycars)
        //     // queryData.map(doc=>console.log("yy",doc.data()))
        //     // setCars(queryData.data().mycars)
        //     setCars(queryData.data().mycars)
        // })
        // .catch(err=>console.log(err))

        // console.log(cars)
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
                    <li className="userdetail_li">
                        <label>Your Token:</label>
                        <span>{user.uid}</span>
                    </li>
                </ul>
            </div>
            

            <div className="carsold">
                {cars && cars.length>0?
                    (
                        <div>
                        <h1>Your Cars</h1>
                        <Carousel className="carsold_carousel">
                        {cars.map((car)=>(
                            <Grid key={car.carid} container justifyContent="center">
                                <Postcard id={car.carid} data={car}/>
                                {/* <h3 style={{"margin"}}>{car.type}</h3> */}
                            </Grid>
                        ))
                        }
                        </Carousel>
                        </div>
                    )
                    :(
                        <h3>No cars</h3>
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
