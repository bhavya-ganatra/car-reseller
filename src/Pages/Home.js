import React from "react";
import Navbar from "../Components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    image: {
        width: '90%',
        height: '100%',
        flex: '1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        width: '90%',
        height: '700px',
        display: 'flex',
        margin: 'auto',
    },
    vertical: {
        display: 'inline-block',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        width: '100%',
        margin: 'auto',
    },
    left:{
        marginRight: '30px',
        marginBottom: '10px',
        display: 'inline-block',
        maxWidth: '150px', maxHeight: '50px', minWidth: '150px', minHeight: '50px',
        border: '2px solid black',
    },
  }));

export default function Home(){
    const classes = useStyles();
    return(
        <div>

            <Navbar className={classes.appBar}/>
            <div className={classes.imageContainer}> 
                    <img src= "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/1_rangerover_tracking.jpg"
                    alt="pic" className={classes.image}/>
            </div>

            <div>
                <h1 style={{textAlign: 'center'}}>About Us</h1>
                <p style={{textAlign: 'center', width: '90%', margin:'auto'}}>
                    Car-Reseller is a website where the search of your perfect second-hand car comes to an end. This website provides the buyer with rich options and various
                    features in order to search the dream car easily. Car-Reseller also allows consumers to upload the details about their second-hand car which they want to sell.
                    It provides a great chat feature to help with a smooth conversation between buyer and seller. 
                </p>
            </div>

            <div style={{textAlign: 'center'}}>
                <h1 >Find Cars by City</h1>
                <div className={classes.vertical}>
                    
                    <div>
                        <Button variant="text" href="/cars/Mumbai" className={classes.left}> Mumbai</Button>
                        <Button variant="text" href="/cars/Banglore" className={classes.left}> Banglore</Button>
                        <Button variant="text" href="/cars/Delhi" className={classes.left}> New Delhi</Button>
                        <Button variant="text" href="/cars/Pune" className={classes.left}> Pune</Button>
                    </div>
                    
                    <div>
                        <Button variant="text" href="/cars/Ahemdabad" className={classes.left}> Ahemdabad</Button>
                        <Button variant="text" href="/cars/Chennai" className={classes.left}> Chennai</Button>
                        <Button variant="text" href="/cars/Kolkata" className={classes.left}> Kolkata</Button>
                        <Button variant="text" href="/cars/Hyderabad" className={classes.left}> Hyderabad</Button>
                    </div>
                    
                    <div style={{marginTop: '40px', backgroundColor: 'powderblue'}}>
                        <h1>Contact Us</h1>
                        <p>
                            <b>Address:</b>
                            Ebs 144, Plot No 126sec 2, Sankalp, Kandivali (west) <br></br>
                            Mumbai <br></br>
                            Maharashtra
                        </p>
                        <p>
                            <b>Telephone:</b>
                            022-789456
                        </p>
                    </div>
                    
                </div>
            </div>

        </div>
    );
}