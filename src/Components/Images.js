import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

export default function Images(props){
    console.log('images ', props.images)
    var images = props.images
    return(
        <Carousel style={{width: '900'}}>
            {
                images?.map(image=>(
                    <Paper>
                        <img src={image} alt='Car' height="500" style={{display:'flex', margin:'auto'}}/>
                    </Paper>
                ))
            }
        </Carousel>
    );
}