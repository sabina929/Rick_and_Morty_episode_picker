import React from 'react'
// import {Store} from './Store';
import {Link} from '@reach/router'


export default function App(props:any):JSX.Element {
//  const {state} = React.useContext(Store)
//  console.log(state)

 return (
   <React.Fragment>
      <header>
        <div className="logo">
          <img src={require("./rm3.png")} alt="Rick and Morty"/>
        </div>
        <div className="links">
          <Link className="link" to='/'>Home</Link>
          <Link className="link" to='/favorites'>Favorites</Link>
          
        </div>

        
      </header>

      {props.children}
    </React.Fragment>
  )
}

