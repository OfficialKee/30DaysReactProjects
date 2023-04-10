// index.js
import Header from './Header'
import React from 'react'
import Main from './Main'
import Footer from './Footer'
import data from './Data'





class App extends React.Component {
  render() {
   
    const techs = ['HTML', 'CSS', 'JavaScript']

    return (
      <div className='app'>
        <Header data={data} />
        <Main techs={techs} />
        <Footer date={new Date()} />
      </div>
    )
  }
}

  export default App;