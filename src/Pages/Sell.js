import {React, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import db from '../Firebase';
import Button from "@material-ui/core/Button";
import Navbar from "../Components/Navbar";

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
    label: {
        fontSize: '20px',
    },
    input: {
        fontSize: '18px',
        marginLeft: '15px',
        marginBottom: '20px',
    },
  }));

export default function Sell(){
    const classes = useStyles();
    const [inputs, setInputs] = useState({});
    const [formFill, setFormFill] = useState('false');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormFill('true');
        const input = [...event.target.elements];
        
        const data = input.reduce((accumulator, currentValue) => {
            if(currentValue.id){
                accumulator[currentValue.id] = currentValue.value;
            }
            return accumulator;
        }, {});

        console.log({ data });
        db.collection("cars").add(data);
    };


    return(
        <div style={{marginLeft: '50px'}}>
            <Navbar className={classes.appBar}/>
        {
            formFill=='true'? <div>
            <h2 style={{marginTop: '30px', marginBottom: '30px'}}> Thank you for filling the form!</h2>
            <Button variant="text" href="/cars" style={{marginTop: '30px', marginBottom: '30px'}}>Go Back</Button>
            </div> : 
            <div>
            <h2 style={{marginTop: '30px', marginBottom: '30px'}}>Fill out the below form to sell a car</h2>

            <div>
    
            <form onSubmit={handleSubmit}>
                <label className={classes.label}>Car Brand:
                <input 
                    id = "carBrand"
                    type="text" 
                    name="carBrand" 
                    value={inputs.carBrand || ""} 
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className={classes.input}
                />
                </label> <br />
    
                <label className={classes.label}>Car Model:
                <input 
                    id = "carModel"
                    type="text" 
                    name="carModel" 
                    value={inputs.carModel || ""} 
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className={classes.input}
                />
                </label> <br />
    
                <label className={classes.label}>Seller Name:
                <input 
                    id = "seller"
                    type="text" 
                    name="seller" 
                    value={inputs.seller || ""} 
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className={classes.input}
                />
                </label> <br />
    
                <label className={classes.label}>Location:
                <input 
                    id = "location"
                    type="text" 
                    name="location" 
                    value={inputs.location || ""} 
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className={classes.input}
                />
                </label> <br />
    
                <label className={classes.label}>Price (in rupees):
                    <input 
                    id = "price"
                    type="number" 
                    name="price" 
                    value={inputs.price || ""} 
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className={classes.input}
                    />
                </label> <br />
    
                <label className={classes.label}>Fuel type:
                    <input 
                    id = "fuelType"
                    type="text" 
                    name="fuelType" 
                    value={inputs.fuelType || ""} 
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className={classes.input}
                    />
                </label> <br />
    
                <label className={classes.label}>Engine (in cc):
                    <input 
                    id = "engine"
                    type="number" 
                    name="engine" 
                    value={inputs.engine || ""} 
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className={classes.input}
                    />
                </label> <br />
    
                <label className={classes.label}>Mileage (in kmpl):
                    <input 
                    id = "mileage"
                    type="number" 
                    name="mileage" 
                    value={inputs.mileage || ""} 
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className={classes.input}
                    />
                </label> <br />
    
                <label className={classes.label}>Seating Capacity:
                    <input 
                    id = "seatingCapacity"
                    type="number" 
                    name="seatingCapacity" 
                    value={inputs.seatingCapacity || ""} 
                    onChange={handleChange}
                    required
                    className={classes.input}
                    />
                </label> <br />
    
    
                <p className={classes.label}>Description:</p>
                <label>
                    <textarea 
                    id = "description"
                    type="textarea" 
                    name="description" 
                    value={inputs.description || ""} 
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    />
                </label> <br />
    
                <input type="submit" />
            </form>
    
            </div>
            </div>
        }
        
        </div>
    );
}