import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'


library.add(faRupeeSign)

const useStyles = makeStyles((theme) => ({
    postcard: {
        marginTop: '20px',
        marginLeft: '15px',
    },
  }));

export default function Postcard(props){
    const classes = useStyles();
    return(
        <div className={classes.postcard}>
            <Card>
            <CardActionArea href={'/detail/' + props.id } target="_blank">
                    <CardMedia
                        component="img"
                        height="200"
                        width="400"
                        image={props.image}
                        alt="Verna"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.carModel}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Price: <FontAwesomeIcon icon="rupee-sign" /> {props.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}