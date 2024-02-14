import { useState } from "react"
import mainimage from "./assets/mainimage.png"
import {createUserWithEmailAndPassword,signInWithPopup} from "firebase/auth"
import {auth} from "./configuration/firebase.jsx"
import GoogleButton from 'react-google-button'
import { googleProvider } from "./configuration/firebase.jsx"

function Content() {
  const [email,setEmail] = useState('');
  const [Password,setPassword] = useState('');
  console.log(auth?.currentUser?.email)

  const signIn = async() => {
          await createUserWithEmailAndPassword(auth,email,Password)

         };

  const signInWithGoogle = async() => {
          await signInWithPopup(auth,googleProvider)


  };

         

    return(
      <div className="maincontent">
        <div className="contentleft">
          <h1 className="companyname">Hanifa Motors</h1>
          <h1>உங்களோட எல்லா</h1>
          <h1><span className="orangehigh">Bike</span> பிரச்சனைக்கும் ஒரே <span className="orangehigh">Solution.</span></h1>
        </div>
        
        <div className="signupdiv">
          <h1 className="signuptext">Signup/Login</h1>
          <input type="text" className="signinput" placeholder="  Email Id" onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" className="signinput" placeholder="  Password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={signIn} className="submitspace">Submit</button>
          <GoogleButton onClick={signInWithGoogle} type="light"  />
          
          
          

          
        </div>
       
      </div>
     
      
    );

}

export default Content