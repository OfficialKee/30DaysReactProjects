   import BarChart from './components/BarChart';
import Header from './components/Header';
   import data from './components/data'
   
function App() {

  const worldMap = data.map(country =>{
    return <><div>{country.country}</div>
    <div> </div>
    <div>{country.population}</div></>
    
  })


  return (
    <div className="App">
      <Header/>
      <div>
        {worldMap}
      <BarChart/>
      </div>
      
     
    </div>
  );
}

export default App;
