import React, {FC} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StoreProvider} from './Store'
import {Router, RouteComponentProps} from '@reach/router'
import HomePage from './HomePage'
import FavPage from './FavPage'
import Episode from './Episode'


// const Home = (props: RouteComponentProps) => <HomePage/>
// const Fav = (props: RouteComponentProps) => <FavPage/>
// const Ep = (props: RouteComponentProps) => <Episode/>
// // const RouterPage = (props: {pageComponent: JSX.Element} & RouteComponentProps) => props.pageComponent


// ReactDOM.render(
//   <StoreProvider>
//     <Router>
//       <App path='/'>
//         <Home path='/'/>
//         <Fav path='/favorites'/>
//         <Ep path='/:episodeID'/>
//       </App>
//     </Router>
//   </StoreProvider>,
//   document.getElementById('root')
// );

type Props = {
	component: FC;
} & RouteComponentProps;
const Route: FC<Props> = ({ component: Component, ...rest }) => (
	<Component {...rest} />
);

const RouterPage = (props: {pageComponent: JSX.Element} & RouteComponentProps) => props.pageComponent
ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path='/'>

      <RouterPage pageComponent={<HomePage/>} path='/'></RouterPage>
      <RouterPage pageComponent={<FavPage/>} path='/favorites'></RouterPage>
      {/* <RouterPage pageComponent={<Episode/>} path='/:episodeID'></RouterPage> */}
      
        <Route component={Episode} path="/:episodeID" />
      
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);

