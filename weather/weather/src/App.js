import React, {useEffect, useState} from 'react';  
import './App.css';



function App() {

  const [city,setCity] = useState(null);
  const [search,setSearch] = useState('');

  useEffect(() => {

    const fetchApi = async() => {
     const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b14425a6554d189a2d7dc18a8e7d7263`
     const response = await fetch(url);
     const resJson = await response.json();
    //  console.log(resJson);
    setCity(resJson.main);
    }
    fetchApi();
  },[search])

//   const user =[ {
//     city:'london',
//     temperature:30,
//     min:24,
//     max:34,
//   },
//   {
//     city:'alwar',
//     temperature:32,
//     min:26,
//     max:39,
//   }
// ]

  

  return (
    <div className="App">
      <div>
     <h1>Weather</h1>
     <input type="search" placeholder="london" onChange={(event)=>{setSearch(event.target.value)}} />
     </div>

    {/* {!city ? (
      <p>No data found</p>
    ) : ( */}

  

     <div className="input" >
     
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_OlQJelpabPFRPY6F0EY02U14ObX6yjDAww&usqp=CAU" alt="" />
        <h1>{search}</h1>
      <h2>{city.temp}*Cel</h2>
      <p>Min :  Cel | Max :  Cel</p>

     </div>

    </div>
    // )}

  );
}

export default App;
