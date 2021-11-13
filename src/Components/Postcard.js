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

export default function Postcard({carname,price}){
    const classes = useStyles();
    return(
        <div className={classes.postcard}>
            <Card sx={{ maxWidth: 500 }}>
                <CardActionArea href="/detail" target="_blank">
                    <CardMedia
                        component="img"
                        height="200"
                        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {carname}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Price: <FontAwesomeIcon icon="rupee-sign" /> {400}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}