import mainimage from "./assets/mainimage.png"


function Content() {
    return(
      <div className="maincontent">
        <div className="contentleft">
          <h1>உங்களோட எல்லா</h1>
          <h1><span className="orangehigh">Bike</span> பிரச்சனைக்கும் ஒரே <span className="orangehigh">Solution.</span></h1>
        </div>
        
        <div className="signupdiv">
          <h1 className="signuptext">Signup/Login</h1>
          <input type="text" className="signinput" placeholder="  Email Id" />
          <input type="text" className="signinput" placeholder="  Password"/>
          <button className="submitspace">Submit</button>

          
        </div>
       
      </div>
     
      
    )

}

export default Content