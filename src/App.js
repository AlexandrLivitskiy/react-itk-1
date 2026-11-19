import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from "./components/Profile/Profile";
import Dialog from "./components/Dialog/Dialog";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App(props) {
  return (
      <BrowserRouter>
      <div className="App">
          <Header logo={logo}/>
          <Header text="THIS IS IT-KA..."/>
          <Navbar/>
          <div className="app-wrapper-content">
              <Routes>
                  <Route path="/profile" element={<Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
                  <Route path="/dialog/*" element={<Dialog store={props.store}/>} />
                  {/*<Route path="/profile" render={() => <Profile />} />*/}
                  {/*<Route path="/dialog/*" render={() => <Dialog />} />*/}
                  {/*<Route path="/dialog/:id" element={<Dialog />} />*/}
                  {/*<Route exact path="/dialog" element={<Dialog />} />*/}
                  {/*<Route path="/profile" component={Profile} />*/}
                  {/*<Route path="/dialog/*" component={Dialog} />*/}
              </Routes>
          </div>
          {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
      </BrowserRouter>
  );
}

export default App;
