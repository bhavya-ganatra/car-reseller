import React, { useEffect } from 'react'
import ImgMediaCard from './ImgMediaCard'
import './MyAccount.css'
import Carousel from 'react-material-ui-carousel'
import { Grid, makeStyles } from '@material-ui/core'
import Navbar from '../Components/Navbar'

const useStyle = makeStyles(theme=>({
    root123: {
        height: '100vh',
      },
      image123: {
        backgroundRepeat: 'no-repeat',
        backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%",
        height: "95vh",
      }
}))

function MyAccount() {
    const carnames = ["car1","car2","car3","car4","car5","car6"]
    // const carnames=[]
    const classes = useStyle();
    return (
        <div className="myaccount">
            <Navbar/>
            <div className="userdetail">
                <ul className="userdetail_ul">
                    <li className="userdetail_li">
                        <label>Name:</label>
                        <span>User1</span>
                    </li>
                    <li className="userdetail_li">
                        <label>Email:</label>
                        <span>user1@gmail.com</span>
                    </li>
                </ul>
            </div>
            
            <div className="carsold">
                {carnames && carnames.length>0?
                    (
                        <div>
                        <h1>Sold Cars</h1>
                        <Carousel className="carsold_carousel">
                        {carnames.map((car,i)=>(
                            <Grid container justifyContent="center">
                                <ImgMediaCard carname={car}/>
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
