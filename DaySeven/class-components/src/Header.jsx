import React from "react"


class Header extends React.Component {
  
    greetPeople =()=>{
        alert('Welcome to the 30 Days of React Challenge, 2023')
    }
   
    
    render() {
        const buttonStyles = {
            backgroundColor: '#61dbfb',
            padding: 10,
            border: 'black',
            borderRadius: 5,
            margin: 3,
            cursor: 'pointer',
            fontSize: 18,
            color: 'white',
            width: 100
          }
     
      const {
        welcome,
        title,
        subtitle,
        author: { firstName, lastName },
        date,
      } = this.props.data
  
      return (
        <header>
          <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
              {firstName} {lastName}
            </p>
            <small>{date}</small>
            <button style={buttonStyles} onClick={this.greetPeople}></button>
          </div>
        </header>
      )
    }
  }

  export default Header;