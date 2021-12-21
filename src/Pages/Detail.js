import React, {useState, useEffect} from "react";
import db from '../Firebase';
import Images from '../Components/Images';
import { Button } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function Detail(props){
    // let user=null
    const [user,setUser] = useState({})
    // if(localStorage.curuser){
    //     setUser(JSON.parse(localStorage.curuser))
    // }

    // const pathname = window.location.pathname
    // const myArray = pathname.split("/");
    // const id = myArray[2]
    // console.log('id',myArray[2])
    const {id} = useParams()
    console.log('id',id)
    const [car, setCar] = useState({})
    const [rerender, setRerender] = useState(false);
    

    // const [state, set] = useState(0);

    // const getData = ()=>{
    //     if(localStorage.curuser){
    //         setUser(JSON.parse(localStorage.curuser))
    //     }
    //     db.collection('cars').doc(id)
    //         .get()
    //         .then(snapshot => {
    //             setCar(snapshot.data())
    //             console.log(snapshot.data())
    //             console.log('cars1',car)
    //             console.log('user',user)
    //             set(prev => prev<3?prev + 1:prev)
    //         })
    // }
    // useEffect(() => {
    //     fn();
    // },[state])

    // function fn() {
    //     // setTimeout({
    //     //     set(prev => prev + 1)
    //     // }, 3000)
    //     setTimeout(getData, 1000);
    // }

    useEffect(() => {
        if(localStorage.curuser){
            setUser(JSON.parse(localStorage.curuser))
        }
            // if(localStorage.curuser){
            //     user = JSON.parse(localStorage.curuser)
            // }
            db.collection('cars').doc(id)
            // .onSnapshot(snapshot=>  setCar(snapshot.data()))
            .get()
            // .then(snapshot => setCar(snapshot.data()))
            .then(snapshot => {
                setCar(snapshot.data())
                console.log(snapshot.data())
                console.log('cars1',car)
            })

        // console.log('cars',{ car });
        console.log('cars',car)
        console.log('user',user)
        // setRerender(prev=>prev==false?.true)
      }, [])
    
    
      // NOT WORKING!!!?
      const loadChat = ()=>{
        window.location.replace(`/peers/${car.sellerId}`)
      }
      const sellCar= ()=>{
        // get and validate token
        let token = window.prompt('Enter token')

        db.collection('users').doc(token).get()
        .then(docSnap=>{
            if(docSnap.exists && token!=user.uid){
                // add car to buyer
                db.collection('users').doc(token).collection('mycarsCollection')
                .add({
                    "carid":id,
                    "type":"bought",
                    "images": car.images,
                    "carModel":car.carModel,
                    "price":car.price
                })
                .then(res=>console.log('added to buyer'))

                // change status of car in seller
                db.collection('users').doc(user.uid).collection('mycarsCollection')
                .where('carid','==',id)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        console.log('doc id: ',doc.id,doc.data())
                        db.collection('users').doc(user.uid).collection('mycarsCollection').doc(doc.id)
                        .update({
                            "type": 'sold'
                          })
                    }
                    )}
                )
                .then(res=>console.log('chaned status in car seller'))

                // update car status
                db.collection('cars').doc(id).update({'carStatus':'sold'})
                .then(res=>console.log('updated status of car'))
                alert('Success')
                // window.location.replace('/')
            }
            else{
                alert('Error')
            }
        })
        

      }
    // const imageList = car.images
    // console.log(imageList)
    // return(
    //     <div>
    //         <h1 style={{textAlign: 'center'}}>{car.carModel}</h1>
    //         <Images images={car.images} />
    //         <p style={{lineHeight:'2', fontSize: '20px', marginLeft: '100px', marginRight:'100px'}}>
    //             <b>Brand</b>: {car.carBrand} <br/>
    //             <b>Engine</b>: {car.engine} cc<br/>
    //             <b>Fuel type</b>: {car.fuelType} <br/>
    //             <b>Location</b>: {car.location} <br/>
    //             <b>Mileage</b>: {car.mileage} kmpl<br/>
    //             <b>Price</b>: {car.price} <br/>
    //             <b>Seating Capacity</b>: {car.seatingCapacity} <br/>
    //             <b>Seller Name</b>: {car.seller} <br/>
    //             <div style={{lineHeight:'1'}}>
    //             <b>Description about the car by the seller</b>: <br/>{car.description}
    //             <br/>
    //             <br/>
    //             {/* {user
    //                 ( */}
                    
    //                     <Button style={{"backgroundColor":"green"}} 
    //                     onClick={loadChat}>Chat with Seller</Button>
    //                 {/* )
    //             } */}
    //             </div>
    //         </p>
    //     </div>
    // );
    return(
        <div>
            <Navbar/>
            {/* <h1 style={{textAlign: 'center'}}>{car.carModel}</h1> */}
            <Images images={car.images} />
            <p style={{lineHeight:'2', fontSize: '20px', marginLeft: '100px', marginRight:'100px'}}>
                <b>Model</b>: {car.carModel} <br/>
                <b>Brand</b>: {car.carBrand} <br/>
                <b>Engine</b>: {car.engine} cc<br/>
                <b>Fuel type</b>: {car.fuelType} <br/>
                <b>Location</b>: {car.location} <br/>
                <b>Mileage</b>: {car.mileage} kmpl<br/>
                <b>Price</b>: {car.price} <br/>
                <b>Seating Capacity</b>: {car.seatingCapacity} <br/>
                <b>Seller Name</b>: {car.seller} <br/>
                {
                    car.carStatus?(
                        <>
                        <b>Car Status</b>: {car.carStatus} <br/>
                        </>
                    ):<></>
                }
                {/* <div style={{lineHeight:'1'}}> */}
                <b>Description about the car by the seller</b>: <br/>{car.description}
                <br/>
                <br/>
                {user!=null && user.uid!=car.sellerId?
                    (
                    
                        <Button style={{"backgroundColor":"green"}} 
                        onClick={loadChat}>Chat with seller</Button>
                    ):
                    (
                        <Button style={{"backgroundColor":"blue"}} 
                        onClick={sellCar}>Sell this car</Button>
                    )
                }
                {/* </div> */}
            </p>
        </div>
    );
}