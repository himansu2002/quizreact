import { useState }  from "react";
import Quizscreen from "./Quizsrceen.js";
import Joinscreen from "./joinscreen.js";
import Navbar from "./Navbar"; 
import "./index.css";



function App(){
const [isquizstarted,setisquizstarted] = useState(false);
return(
    <>
    <Navbar/>
    <div className="quiz-container">
        {
            isquizstarted ? (<Quizscreen retry={()=>setisquizstarted(false)}/>) :(<Joinscreen start={()=>setisquizstarted(true)}/>)
        }
    </div>
    </>
);
}




export default App;
