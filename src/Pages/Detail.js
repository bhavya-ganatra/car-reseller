import React, {useState, useEffect} from "react";
import db from '../Firebase';
import Images from '../Components/Images';

export default function Detail(props){
    const pathname = window.location.pathname
    const myArray = pathname.split("/");
    const id = myArray[2]
    console.log(myArray[2])
    const [car, setCar] = useState('')

    useEffect(() => {
        db.collection('cars').doc(id).get()
            .then(snapshot => setCar(snapshot.data()))
        console.log({ car });
      }, []);
    
    const imageList = car.images
    console.log(imageList)
    return(
        <div>
            <h1 style={{textAlign: 'center'}}>{car.carModel}</h1>
            <Images images={car.images} />
            <p style={{lineHeight:'2', fontSize: '20px', marginLeft: '100px', marginRight:'100px'}}>
                <b>Brand</b>: {car.carBrand} <br/>
                <b>Engine</b>: {car.engine} cc<br/>
                <b>Fuel type</b>: {car.fuelType} <br/>
                <b>Location</b>: {car.location} <br/>
                <b>Mileage</b>: {car.mileage} kmpl<br/>
                <b>Price</b>: {car.price} <br/>
                <b>Seating Capacity</b>: {car.seatingCapacity} <br/>
                <b>Seller Name</b>: {car.seller} <br/>
                <div style={{lineHeight:'1'}}>
                <b>Description about the car by the seller</b>: <br/>{car.description}
                </div>
            </p>
        </div>
    );
}