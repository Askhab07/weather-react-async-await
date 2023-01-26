import './App.css';
import Weather from './Weather';
import { useState } from 'react';
import Search from './assets/search.png'

function App() {
  const [cityList, setCityList] = useState([]);
  const [city, setCity] = useState("");
  const [err, setErr] = useState("");
    
  
  const url = async () => {
      try{
        let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=959fbc882edd4522b59134540213007&q=${city}}`);
        let data = await response.json();

        if(data.location === undefined){
          throw new Error(data.error.message)
        }
        setErr("")
        setCityList([...cityList, data])
      }catch(e){
        setErr(e.message)
      }
    }

    const onKeyEnter = (e) => {
      if (e.key === "Enter"){
        url()
      }
    }

    return (
      <div className="app">
        <h1 className='h1'>Weather</h1>
        <div className='input__app'>
        <div className='input__app-block'>
        <input className='input' onKeyDown={onKeyEnter} type="search" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Search for a city" />
        <img className='search' onClick={url} src={Search} />
        </div>
        <span className='err'>{err}</span>
        </div>
        {cityList.map(item => <Weather poplivok={item}/>)}
      </div>
  );
}

export default App;
