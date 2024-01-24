import mainimage from "./assets/mainimage.png"


function Content() {
    return(
      <div className="maincontent">
        <div className="contentleft">
          <h1>One Stop Solution</h1>
          <h1>For Your Bike Problem</h1>
        </div>
        <div>
        <img className= 'contentimage' src={mainimage} alt="" />
        </div>
      </div>
      
    )

}

export default Content