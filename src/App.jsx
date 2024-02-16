import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/home";
import Order from "./pages/order";

function App() {
      return(
        <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/order" element={<Order/>}/>
          </Routes>
        </Router>
        </div>
      );

}

export default App
