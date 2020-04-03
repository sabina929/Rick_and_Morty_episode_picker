import React from 'react'
import {Store} from './Store';
import {Link} from '@reach/router'


export default function App(props:any):JSX.Element {
 const {state} = React.useContext(Store)

 return (
   <React.Fragment>
      {/* {console.log(store)} */}
      <header>
        <div className="logo">
          <img src={require("./rm3.png")} alt="Rick and Morty"/>
          <p>Pick your favorite episode!</p>
        </div>
        <div className="links">
          <Link style={{textDecoration: 'none', color: 'rgb(79, 230, 49)'}} to='/'>Home</Link>
          <Link style={{textDecoration: 'none', color: 'rgb(79, 230, 49)'}} to='/favorites'>Favorites</Link>
          
        </div>

        
      </header>

      {props.children}
    </React.Fragment>
  )
}

