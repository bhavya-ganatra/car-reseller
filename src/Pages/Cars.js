import React, {useState,useEffect} from "react";
import Navbar from "../Components/Navbar";
import Postcard from "../Components/Postcard";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";
import db from '../Firebase';

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
    formControl: {
      marginLeft: '20px',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    dropdown: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '25px',
        marginBottom: '5px',
        marginLeft: '15px',
    },
    search: {
        marginLeft: '20px',
        marginTop: '10px',
    },
  }));


export default function Cars(){

    const classes = useStyles();
    const [location, setLocation] = React.useState('None');
    const [budget, setBudget] = React.useState('None');
    const [brand, setBrand] = React.useState('None');

    const selectLocation = (event) => {
        setLocation(event.target.value);
        console.log(event.target.value);
    };

    const selectBudget = (event) => {
        setBudget(event.target.value);
        console.log(event.target.value);
    };

    const selectBrand = (event) => {
        setBrand(event.target.value);
        console.log(event.target.value);
    };

    const handleSearch = (event) => {
        console.log(location + " " + budget + " " + brand);
    }

    const [cars,setCars]=useState([])

    useEffect(() => {
        db.collection("cars").onSnapshot((snapshot) => {
          setCars(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            })) 
        );
        });
        console.log({ cars });
      }, []);


    return(
        <div>
            <Navbar className={classes.appBar}/>

            <div style={{marginTop: '70px'}}>
            <div className={classes.dropdown}>
                <b>Location: </b>
            
                <FormControl className={classes.formControl}>
                    <Select
                    value={location}
                    onChange={selectLocation}
                    displayEmpty
                    //className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <option value={"None"}> None </option>
                    <option value={'Mumbai'}>Mumbai</option>
                    <option value={'Ahemdabad'}>Ahemdabad</option>
                    <option value={"Kolkata"}>Kolkata</option>
                    <option value={"Banglore"}>Banglore</option>
                    </Select>
                </FormControl>
            </div>

            <div className={classes.dropdown}>
                <b>Budget: </b>
            
                <FormControl className={classes.formControl}>
                    <Select
                    value={budget}
                    onChange={selectBudget}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <option value="None"> None </option>
                    <option value={0}>0-3 Lacs</option>
                    <option value={3}>3-6 Lacs</option>
                    <option value={6}>6-10 Lacs</option>
                    <option value={10}>More than 10 Lacs</option>
                    </Select>
                </FormControl>
            </div>

            <div className={classes.dropdown}>
                <b>Brand: </b>
            
                <FormControl className={classes.formControl}>
                    <Select
                    value={brand}
                    onChange={selectBrand}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <option value="None"> None </option>
                    <option value={"Maruti"}>Maruti Suzuki</option>
                    <option value={"Tata"}>Tata</option>
                    <option value={"Mahindra"}>Mahindra</option>
                    <option value={"Toyata"}>Toyata</option>
                    </Select>
                </FormControl>
            </div>

                <Button variant="contained" color="primary"
                        onClick={() => handleSearch()}
                        className={classes.search}>
                    SEARCH
                </Button>
            </div>

            

            <Grid container spacing={1}>
                {cars?.map(({ id, data }) => (
                    <Grid key={id} item xs={12} sm={6} md={3} lg={2}>
                    <Postcard
                        id={id}
                        data={data}
                        carModel={data.carModel}
                        price={data.price}
                        image={data.images[0]}
                    />
                    </Grid>
                ))}
            </Grid>

        </div>
    );
}