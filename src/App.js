
import './App.css';
import react,{useState} from 'react';
function App() {
  const[height,setheight]=useState(0);
  const[weight,setweight]=useState(0);
  const[msg,setMsg]=useState("");
  const[bmi,setbmi]=useState();

let check=(e)=>{
e.preventDefault();
  if(height==0||weight==0||height<0||weight<0){
    alert("Enter the value of height and width gerater than 0");
  }
  else{
    let bmi=weight/(height*height);
    setbmi(bmi.toFixed());
    
    if(bmi>1000){
      setMsg("You over weight");
    }
    if(bmi<1000){
     
      setMsg("You over underweight");
    }
  
  }
};
let reload=()=>{
    window.location.reload();
}


  return (
    <div className="containers">
  <div className="container">
    <form onSubmit={check}>
      <div className="heading">
      <h2>BMI</h2>
      </div>
       <div className="dataContain">
        <div className="data1">
          <label> Weight(lbs) :</label>
          <input type="text" value={weight} onChange={(e)=>setweight(e.target.value)} placeholder="Enter Weight"></input>
         </div>
         <div className="data2">
           <label>Height : </label> 
          <input type="text" value={height} onChange={(e)=>setheight(e.target.value)} placeholder="Enter Height"></input>
         </div>
      </div>
      <div className="btns">
      <button type="Submit" className="Subbtn">Submit</button>
      <button type="Button" onClick={reload}>Reload</button>
      </div>
      <div className='bmiDetail'>
        <h4>Your BMI-{bmi},{msg}</h4>
        </div>
      </form>
      
  </div>
  </div>
  );
}

export default App;
