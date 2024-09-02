
import React,{useState} from 'react';
import './App.css';

function App() {

 const [result,setResult] = useState('');

 const clickHandler = (e) => {
      setResult(result.concat(e.target.value))
 }

 const clickClear =()=>{
   setResult('')
 }

 const onSubmit = (e) =>{

   e.preventDefault();
   setResult(eval(result).toString());
 }

  return (
    <div className="App">
      <div className="container">
      <input className='a0' type="text" placeholder='0' value={result} />
      <ul>
        <form  >
       <div className="a012">
        <input type="button" value='0'onClick={clickHandler} />
        <input type="button" value='1' onClick={clickHandler} />
        <input type="button" value='2'onClick={clickHandler} />
        <input type="button" value='3'onClick={clickHandler} />

        </div>
        <div className="a012">
       
        <input type="button" value='4' onClick={clickHandler} />
        <input type="button" value='5'onClick={clickHandler} />
        <input type="button" value='6'onClick={clickHandler} />
        <input type="button" value='7' onClick={clickHandler} />
        </div>
        <div className="a012">
       
       
        <input type="button" value='8' onClick={clickHandler} />
        <input type="button" value='9'onClick={clickHandler} />
        <input type="button" value='+' onClick={clickHandler} />
        <input type="button" value='*' onClick={clickHandler} />
        </div>
        <div className="a022">
        
       
        <input type="button" value='%' onClick={clickHandler} />
        <input type="button" value='-' onClick={clickHandler} />
        <input type="button" value='clear' onClick={clickClear} />
        <button onClick={onSubmit}  >=</button>
        </div>
        </form>
   
      

       
      </ul>
      </div>
     
    </div>
  );
}

export default App;
