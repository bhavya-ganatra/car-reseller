import {React, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import db from '../Firebase';
import Button from "@material-ui/core/Button";
import Navbar from "../Components/Navbar";
import Login from "./Login";

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
    let user=null
    if(localStorage.curuser){
      user = JSON.parse(localStorage.curuser)
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormFill('true');
        const input = [...event.target.elements];
        console.log(input)
        const data = input.reduce((accumulator, currentValue) => {
            if(currentValue.id){
                if(currentValue.id.startsWith('image')){
                    if(accumulator['images']){
                        accumulator['images'].push(currentValue.value);
                    }
                    else{
                        accumulator['images'] = [currentValue.value];
                    }

                }
                else if(currentValue.id=="price" || currentValue.id=="engine" || currentValue.id=="mileage" ||
                currentValue.id=="seatingCapacity"){
                    accumulator[currentValue.id] = parseInt(currentValue.value);
                }
                else{
                    accumulator[currentValue.id] = currentValue.value;
                }
            }
            return accumulator;
        }, {});

        console.log({ data });
        db.collection("cars").add(data)
        .then(doc=>{
            db.collection('users').doc(user.uid)
            .collection('mycarsCollection')
            .add({
                //TODO: Add all attributes required in myaccount page
                "carid":doc.id,
                "type":"onSell",
                "images":data['images'],
                "carModel":data['carModel'],
                "price":data['price']
            })
        })

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
    
                {/* <label hidden className={classes.label}>Seller Name: */}
                <input hidden
                    id = "seller"
                    type="text" 
                    name="seller" 
                    // value={inputs.seller || ""} 
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className={classes.input}
                    defaultValue={user.displayName}
                    
                />
                 {/* </label> <br /> */}
    
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

                <label className={classes.label}>Image1:
                <input 
                    id = "image1"
                    type="text" 
                    name="image1" 
                    value={inputs.image1 || ""} 
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className={classes.input}
                />
                </label> <br />

                <label className={classes.label}>image2:
                <input 
                    id = "image2"
                    type="text" 
                    name="image2" 
                    value={inputs.image2 || ""} 
                    onChange={handleChange}
                    autoComplete="off"
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
                <input type="text" id="sellerId" defaultValue={user.uid} hidden></input>
                <input type="text" id="carStatus" defaultValue="onSell" hidden></input>
                <input type="submit" />
            </form>
    
            </div>
            </div>
        }
        
        </div>
    );
}