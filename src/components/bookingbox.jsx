import "./bookingbox.css"
import {auth} from "../configuration/firebase.jsx"
import {db} from "../configuration/firebase.jsx"
import {collection , addDoc} from "firebase/firestore"
import { useState , useEffect } from "react";




function Bookingbox() {
    const [bikename , setbikename] = useState('');
    const [bikemodel, setbikemodel] = useState('');
    const [need,setneed] = useState('');
    const [spare,setspare] = useState('');
    const [user,setuser] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged((data) => {
            console.log(data)
            setuser(data) 

        })

    },[])


   
    
   

    const placeorder = async() => {
        const generalref =  collection(db,`users/${user.uid}/order`)
        await addDoc(generalref,{
           
                bikename : bikename,
                bikemodel: bikemodel,
                need: need,
                spare: spare
        
            }    
                ) }
          

        
    
    
    

   return(
    <div className="body"> 
   <div class="custom-shape-divider-top-1708097514">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
 
    <div className="bookingbox">
        <label htmlFor="bike_name" className="biglabel">Bike Name</label>
        <input className="biginput" id="bike_name" type="text"  onChange={(e) => setbikename(e.target.value)}  />
        <label htmlFor="bike_model" className="biglabel">Bike Model</label>
        <input className="biginput" id="bike_model" type="text" onChange={(e) => setbikemodel(e.target.value)} />

        <label htmlFor="dropdown" className="biglabel">What you want?</label>
        <select name="dropdown" id="dropdown" onSelect={(e) => setneed(e.target.value)} >
        <option value="">Choose the option</option>
        <option value="scrap">Scrap</option>
        <option value="Sparepart">sparepart</option>
        </select>
        <label htmlFor="whatspare" className="biglabel">Spareparts you want?</label>
        <input type="text" className="biginput" id="whatspare"  onChange={(e) => setspare(e.target.value)} />
        <button  onClick={placeorder}  className="submitbutton">Order</button>
    </div>
    </div>
   )
}





export default Bookingbox