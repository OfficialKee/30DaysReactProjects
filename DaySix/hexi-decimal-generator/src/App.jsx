import Header from "./components/Header";
import hexArray from './components/HexArray'


function App() {


  



    const colorBlock = hexArray.map(hex => {
      return <div
        key={hex}
        className="boxes"
        style = {{backgroundColor: hex}}
      >{hex}</div>
    })


    return (
      <>
        <Header />
        <div className="display">
          {colorBlock}
        </div>
      </>
    );
  }


  export default App;